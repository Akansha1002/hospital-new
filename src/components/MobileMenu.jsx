import Link from "next/link";
import React from "react";

export default function MenuOverlay({ navbarOpen, setNavbarOpen }) {
    return (
        <nav
            className={`fixed flex top-20 left-0 w-80 p-6 z-10 h-screen bg-gray-100 text-black bg-opacity-100 transform delay-100 transition-all duration-500 ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}
        >
            <ul className="w-full items-start gap-2 text-lg font-medium">
                <li className="border-b">
                    <h1
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        <Link href="/">
                            Home
                        </Link>
                    </h1>
                </li>
                <li className="border-b">
                    <h1
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        <Link href="/about-us">
                            About
                        </Link>
                    </h1>
                </li>

                <li className="border-b">
                    <h1
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        <Link href="/product">
                            Product
                        </Link>
                    </h1>
                </li>
                <li className="border-b">
                    <h1
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        <Link href="/gallery">
                            Gallery
                        </Link>
                    </h1>
                </li>
                {/* <li className="border-b">
                    <a
                        href="/"
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        Exports
                    </a>
                </li> */}
                <li className="border-b">
                    <h1
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        <Link href="/contact-us">
                            Contact Us
                        </Link>
                    </h1>
                </li>
            </ul>
        </nav>
    );
};
