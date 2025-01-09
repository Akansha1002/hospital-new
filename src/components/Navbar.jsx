import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../public/logo.jpeg'

export default function Navbar({ navbarOpen, setNavbarOpen }) {
    return (
        <div className='mx-auto px-4 md:px-8 shadow-xl'>
            <header className="mb-4 flex items-center justify-between py-4 md:py-8">
                {/* <!-- logo - start --> */}
                <a href="/" className="inline-flex items-center" aria-label="logo">
                    {/* <Image
                        src={Logo}
                        alt='logo'
                        width={80}
                        height={50}
                    /> */}
                </a>
                {/* <!-- logo - end --> */}

                {/* <!-- nav - start --> */}
                <nav className="hidden gap-12 lg:flex sticky">
                    <a href="/" className="text-lg font-semibold text-indigo-500">Home</a>
                    <Link
                        href="/about-us"
                        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                    >
                        About
                    </Link>
                    <Link
                        href="/product"
                        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                    >
                        Product
                    </Link>
                    <Link
                        href="/gallery"
                        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                    >
                        Gallery
                    </Link>
                    {/* <Link
                        href="/exports"
                        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                    >
                        Exports
                    </Link> */}
                    <Link
                        href="/contact-us"
                        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                    >
                        Contact Us
                    </Link>
                </nav>
                {/* <!-- nav - end --> */}

                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
                {/* <!-- buttons - end --> */}
            </header>
        </div>
    )
}

// import React from "react";

// const Navbar = ({ navbarOpen, setNavbarOpen }) => {
//     return (
//         <header className="w-full fixed top-0 left-0 p-10 flex z-20 bg-black">
//             {/* Logo */}
//             <div className="text-white flex-grow z-20">
//                 <h1 className="text-2xl font-bold my-0">Logo</h1>
//             </div>
//             {/* Hamburger Icon */}
//             <button
//                 className="lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
//                 onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//                 <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
//                     <span
//                         className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
//                             }`}
//                     ></span>
//                     <span
//                         className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
//                             }`}
//                     ></span>
//                     <span
//                         className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
//                             }`}
//                     ></span>
//                 </div>
//             </button>
//         </header>
//     );
// };
// export default Navbar;
