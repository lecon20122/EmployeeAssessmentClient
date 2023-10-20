import { API_ROUTES } from '@/utilities/api-routes'
import { ROUTES } from '@/utilities/routes'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    debug: true,
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: ROUTES.SIGNIN,
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const res = await fetch(`${process.env.BACKEND_URL}${API_ROUTES.LOGIN}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        Email: credentials?.username,
                        password: credentials?.password
                    }),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                if (res.ok && user) return user

                return null
            }
        }),

    ],
    callbacks: {
        async jwt({ token, user, session }) {
            if (user?.token) {
                token.token = user.token
            }
            return token
        },
        async session({ session, token }) {
            if (token?.token) {
                session.token = token.token
            }
            return session
        }
    },

}