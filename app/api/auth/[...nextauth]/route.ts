import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// This is a basic implementation. In a real app, you would:
// 1. Connect to your database
// 2. Properly hash and verify passwords
// 3. Add additional providers as needed

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // This is where you would verify credentials against your database
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Mock user data - replace with actual database lookup
        if (credentials.email === "client@example.com" && credentials.password === "password") {
          return {
            id: "1",
            name: "John Doe",
            email: "client@example.com",
            role: "client",
          }
        }

        if (credentials.email === "writer@example.com" && credentials.password === "password") {
          return {
            id: "2",
            name: "Jane Smith",
            email: "writer@example.com",
            role: "writer",
          }
        }

        if (credentials.email === "admin@example.com" && credentials.password === "password") {
          return {
            id: "3",
            name: "Admin User",
            email: "admin@example.com",
            role: "admin",
          }
        }

        return null
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
})

export { handler as GET, handler as POST }
