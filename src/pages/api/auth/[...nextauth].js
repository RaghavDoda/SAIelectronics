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
  session:{
    strategy:'jwt',
  },
})