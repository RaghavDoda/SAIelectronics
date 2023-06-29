import  NextAuth from 'next-auth'
import GoogleProviders from 'next-auth/providers/google'

export default NextAuth({
  providers : [
    GoogleProviders({
      clientId : process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  session:{
    strategy:'jwt',
  },
})