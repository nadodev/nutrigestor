import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { db } from "./firebase"



export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    adapter: FirestoreAdapter(db),
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',
    },
    callbacks: {
        async session({ session, user }) {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        },
    },
})