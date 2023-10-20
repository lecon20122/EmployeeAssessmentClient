"use client";
import { ROUTES } from '@/utilities/routes';
import { stat } from 'fs';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { data, status } = useSession();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Brand Logo or Site Name */}
                    <a href="#" className="text-white text-2xl font-semibold">
                        Employees Assessments
                    </a>

                    {/* Responsive Menu Button (Hamburger) */}
                    <div className="lg:hidden">
                        <button
                            id="menu-toggle"
                            className="text-white"
                            onClick={toggleMenu}
                        >
                            <FaBars />
                        </button>
                    </div>

                    {/* Authentication Section */}
                    {status === 'authenticated' && (
                        <div className="hidden lg:flex">
                            {/* If the user is authenticated, show their name or email */}
                            <span className="text-white mr-4">{data.user.email}</span>
                            {/* If the user is not authenticated, you can show a login button */}
                            <a onClick={(e) => signOut()} href="#" className="text-white">
                                Logout
                            </a>
                        </div>
                    )}

                    {status === 'unauthenticated' && (
                        <div className="hidden lg:flex gap-2">
                            {/* If the user is not authenticated, you can show a login button */}
                            <Link href={ROUTES.SIGNIN} className="text-white">
                                Sign in
                            </Link>
                            <a href="#" className="text-white">
                                Register
                            </a>
                        </div>
                    )}

                </div>
            </nav>

            {/* Responsive Navigation Menu (Hidden by default) */}
            {menuOpen && (
                <div className="lg:hidden" id="menu">
                    <div className="bg-blue-500 p-4">
                        {/* Authentication Section for Mobile */}
                        <div>
                            {/* If the user is authenticated, show their name or email */}
                            <span className="text-white text-sm mr-4">{data?.user.email}</span>
                            {/* If the user is not authenticated, you can show a login button */}
                            <a onClick={(e) => signOut()} href="#" className="text-white">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
