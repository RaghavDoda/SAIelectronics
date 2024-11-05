// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
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
});
