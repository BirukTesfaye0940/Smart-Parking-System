// import bcrypt from "bcrypt";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "../../../../lib/prisma"; // Adjust this path if needed

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {},
//         password: {},
//         role: {}, // 'admin' | 'user' | 'owner'
//       },
//       async authorize(credentials) {
//         const { email, password, role } = credentials ?? {};

//         if (!email || !password || !role) return null;

//         let dbUser;

//         switch (role) {
//           case "admin":
//             dbUser = await prisma.admin.findUnique({ where: { email } });
//             break;
//           case "user":
//             dbUser = await prisma.user.findUnique({ where: { email } });
//             break;
//           case "owner":
//             dbUser = await prisma.owner.findUnique({ where: { email } });
//             break;
//           default:
//             return null;
//         }

//         const isValid = dbUser && (await bcrypt.compare(password, dbUser.password));
//         if (!isValid) return null;

//         return {
//           id: dbUser.id ?? dbUser.user_id ?? dbUser.owner_id,
//           name: dbUser.firstName ?? dbUser.first_name,
//           email: dbUser.email,
//           role,
//         };
//       },
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.email = token.email;
//         session.user.role = token.role;
//       }
//       return session;
//     },
//   },

//   pages: {
//     signIn: "/login", // Your custom login page
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../lib/prisma"; // Adjust this path if needed

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
        role: {},
      },
      async authorize(credentials) {
        const { email, password, role } = credentials ?? {};

        if (!email || !password || !role) return null;

        let dbUser;

        switch (role) {
          case "admin":
            dbUser = await prisma.admin.findUnique({ where: { email } });
            break;
          case "user":
            dbUser = await prisma.user.findUnique({ where: { email } });
            break;
          case "owner":
            dbUser = await prisma.owner.findUnique({ where: { email } });
            break;
          default:
            return null;
        }

        if (!dbUser || !(await bcrypt.compare(password, dbUser.password))) {
          return null;
        }

        return {
          id: dbUser.id ?? dbUser.user_id ?? dbUser.owner_id,
          name: dbUser.firstName ?? dbUser.first_name,
          email: dbUser.email,
          role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.email = token.email;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
