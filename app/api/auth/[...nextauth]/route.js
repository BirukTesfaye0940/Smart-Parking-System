import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../../lib/prisma';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
        role: {}, // include role field
      },
      async authorize(credentials) {
        try {
          const { email, password, role } = credentials || {};

          if (!email || !password || !role) {
            console.log('Missing credentials');
            return null;
          }

          let user = null;

          if (role === 'admin') {
            user = await prisma.admin.findUnique({ where: { email } });
          } else if (role === 'user') {
            user = await prisma.user.findUnique({ where: { email } });
          } else if (role === 'owner') {
            user = await prisma.owner.findUnique({ where: { email } });
          }

          if (!user) {
            console.log('No user found with email:', email);
            return null;
          }

          if (!user.password) {
            console.log('User has no password set');
            return null;
          }

          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            console.log('Invalid password');
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            role,
          };
        } catch (err) {
          console.error('Error during authorize:', err);
          return null; // never throw from authorize
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
