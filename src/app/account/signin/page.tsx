"use client"
import { sign } from 'crypto';
import { signIn } from 'next-auth/react';
import React from 'react'

export default function SignIn() {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signIn('credentials', {
            redirect: true,
            username: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            callbackUrl : '/'
        });
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 text-gray-700" // Added text-gray-700 class
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 text-gray-700" // Added text-gray-700 class
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}
