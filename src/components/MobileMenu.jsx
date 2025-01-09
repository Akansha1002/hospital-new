import React from "react";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
    return (
        <nav
            className={`fixed flex top-20 left-0 w-80 p-6 z-10 h-screen bg-gray-100 text-black bg-opacity-100 transform delay-100 transition-all duration-500 ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}
        >
            <ul className="w-full  items-start gap-2 font-medium">
                <li className="border-b">
                    <a
                        href="/"
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        Home
                    </a>
                </li>
                <li className="border-b">
                    <a
                        href="/"
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        About
                    </a>
                </li>

                <li className="border-b">
                    <a
                        href="/"
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        Product
                    </a>
                </li>
                <li className="border-b">
                    <a
                        href="/"
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        Gallery
                    </a>
                </li>
                <li className="border-b">
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
                </li>
                <li className="border-b">
                    <a
                        href="/"
                        className="block py-2 px-3"
                        onClick={(e) => {
                            e.preventDefault();
                            setNavbarOpen(false);
                        }}
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MenuOverlay;
