// app/api/auth/[...nextauth]/route.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const prisma = new PrismaClient()

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
        const { email, password, role } = credentials

        let user = null

        if (role === 'admin') {
          user = await prisma.admin.findUnique({ where: { email } })
        } else if (role === 'user') {
          user = await prisma.user.findUnique({ where: { email } })
        } else if (role === 'owner') {
          user = await prisma.owner.findUnique({ where: { email } })
        }

        if (!user) return null
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) return null

        return {
          id: user.id,
          email: user.email,
          role,
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
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
