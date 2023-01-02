import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
        <header>
            <nav className="flex flex-wrap items-center px-3 bg-gray-500 ">
                <Link className="inline-flex items-center px-2 me-4" href='/'>
                    <span className="text-x1 fonr-bold tracking-wide text-black">Cookis Stand Admin</span>
                </Link>
                <section className="hiddeb w-full lg:inline-flex lg:flex-grow lg:w-auto">
                    <section className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
                        <Link className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hever:bg-cyan-700 hover:text-white" href='/'>Home</Link>
                        <Link className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hever:bg-cyan-700 hover:text-white" href='/'>Services</Link>
                        <Link className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hever:bg-cyan-700 hover:text-white" href='/'>About Us</Link>
                        <Link className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hever:bg-cyan-700 hover:text-white" href='/'>Contact Us</Link>

                    </section>
                </section>
            </nav>
        </header>
    )
}