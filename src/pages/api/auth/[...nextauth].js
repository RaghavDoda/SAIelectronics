import  NextAuth from 'next-auth'
import GoogleProviders from 'next-auth/providers/google'
import GithubProviders from 'next-auth/providers/github'
import CredentialsProviders from 'next-auth/providers/credentials'

export default NextAuth({
  providers : [
    GoogleProviders({
      clientId : process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProviders({
      clientId : process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
      jwt: true, // Use JSON Web Tokens for session handling
      maxAge: 30 * 24 * 60 * 60, // Set session max age (30 days)
  },
  callbacks: {
      async jwt(token, user) {
          if (user) {
              token.id = user.id; // Add user ID to the token
          }
          return token;
      },
      async session(session, token) {
          session.user.id = token.id; // Add user ID to session
          return session;
      },
  },
})