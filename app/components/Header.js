import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

export default function Header() {

    const { isDarkTheme,toggleThemeHandler } = useContext(ThemeContext);
    // console.log(useContext(ThemeContext))
    return(
        <header>
            <nav className=" flex flex-wrap items-center px-3 bg-gray-500 dark:bg-black ">
                <Link className="inline-flex items-center px-2 me-4" href='/'>
                    <span className="text-x2 fonr-bold tracking-wide text-black dark:text-white">Cookis Stand Admin</span>
                </Link>
                <section className="hiddeb w-full lg:inline-flex lg:flex-grow lg:w-auto">
                    <section className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
                        <Link className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hever:bg-cyan-700 hover:text-white" href='/'>Home</Link>
                        <Link className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hever:bg-cyan-700 hover:text-white" href='/'>Services</Link>
                        <Link className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hever:bg-cyan-700 hover:text-white" href='/'>About Us</Link>
                        <Link className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hever:bg-cyan-700 hover:text-white" href='/'>Contact Us</Link>
                        <button
                            type="button"
                            className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-300 text-black dark:bg-slate-800 dark:text-white rounded"
                            onClick={toggleThemeHandler}
                            >Toggel Theme</button>
                    
                    </section>
                </section>
            </nav>
        </header>
    )
}