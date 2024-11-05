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
        strategy: 'jwt', // Use JWT strategy
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email; // Add user's email to token
            }
            return token;
        },
        async session({ session, token }) {
            session.user.email = token.email; // Attach email to session
            return session;
        },
    },
    pages: {
        signIn: '/login', // Redirect here if not authenticated
    },
    cookies: {
        // Configure cookie options
        sessionToken: {
            name: `__Secure-next-auth.session-token`, // Secure cookie name
            options: {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // Use secure cookies in production
                sameSite: "lax",
            },
        },
    },
});
