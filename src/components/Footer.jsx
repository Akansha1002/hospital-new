import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* <!-- footer - start --> */}
            <footer className="bg-white">
                {/* <div className="bg-indigo-500 py-6">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                            <div className="mb-3 text-center md:mb-0 md:text-left">
                                <span className="font-bold uppercase tracking-widest text-gray-100">Newsletter</span>
                                <p className="text-indigo-200">Subscribe to our newsletter</p>
                            </div>

                            <form className="flex w-full gap-2 md:max-w-md">
                                <input placeholder="Email" className="w-full flex-1 rounded border border-white bg-indigo-400 px-3 py-2 text-white placeholder-indigo-100 outline-none ring-indigo-300 transition duration-100 focus:ring" />

                                <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-indigo-600 md:text-base">Send</button>
                            </form>
                        </div>
                    </div>
                </div> */}

                <div className="pt-12 lg:pt-16 pb-4 bg-slate-100">
                    <div className="mx-auto px-12 md:px-8">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8 ">
                            {/* <div className="col-span-full lg:col-span-2"> */}
                            {/* <!-- logo - start --> */}
                            {/* <div className="mb-4 lg:-mt-2">
                  <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                    <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-5 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                    </svg>

                    Flowrift
                  </a>
                </div> */}
                            {/* <!-- logo - end --> */}

                            {/* </div> */}

                            {/* <!-- nav - start --> */}
                            <div>
                                <div className="mb-4 text-xl font-bold text-black md:text-2xl uppercase tracking-widest">Shri Shyam Impex</div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>

                                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </a>

                                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>

                                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div>
                                        <p>
                                            Plot No 82/9, Near Kailash Vihar, HPSIDC, Industrial Area Baddi, Distt-Solan, Himachal Pradesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- nav - end --> */}

                            {/* <!-- nav - start --> */}
                            <div>
                                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>

                                <nav className="flex flex-col gap-4">
                                    <div>
                                        <Link href="/" className="text-gray-500 transition duration-100 hover:text-indigo-500 hover:underline active:text-indigo-600">Home</Link>
                                    </div>

                                    <div>
                                        <Link href="/about-us" className="text-gray-500 transition duration-100 hover:text-indigo-500 hover:underline active:text-indigo-600">About</Link>
                                    </div>

                                    <div>
                                        <Link href="/gallery" className="text-gray-500 transition duration-100 hover:text-indigo-500 hover:underline active:text-indigo-600">Gallery</Link>
                                    </div>

                                    <div>
                                        <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 hover:underline active:text-indigo-600">Contact Us</a>
                                    </div>
                                </nav>
                            </div>
                            {/* <!-- nav - end --> */}

                            {/* <!-- nav - start --> */}
                            <div>
                                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>

                                <nav className="flex flex-col gap-4">
                                    <div>
                                        <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 hover:underline active:text-indigo-600">Face Mask</a>
                                    </div>

                                    <div>
                                        <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 hover:underline active:text-indigo-600">Head Cap</a>
                                    </div>

                                    <div>
                                        <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 hover:underline active:text-indigo-600">Shoe Cover</a>
                                    </div>

                                    <div>
                                        <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 hover:underline active:text-indigo-600">Hand Gloves</a>
                                    </div>
                                </nav>
                            </div>
                            {/* <!-- nav - end --> */}

                            {/* <!-- nav - start --> */}
                            <div>
                                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Reach Us</div>

                                <nav className="flex flex-col gap-4 cursor-pointer">
                                    <div>
                                        <p className="inline-flex items-center justify-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                height={12}
                                                width={12}
                                            >
                                                <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
                                            </svg>
                                            +91 92186 20013
                                        </p>
                                    </div>
                                    <div>
                                        <p className="inline-flex items-center justify-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                height={12}
                                                width={12}
                                            >
                                                <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
                                            </svg>
                                            +91 98767 27576
                                        </p>
                                    </div>

                                    <div>
                                        <p className="inline-flex items-center justify-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="12"
                                                width="15"
                                                viewBox="0 0 640 512"
                                            >
                                                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                                            </svg>
                                            www.shrishyamimpex.net
                                        </p>
                                    </div>

                                    <div>
                                        <p className="inline-flex items-center justify-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="12"
                                                width="12"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                            </svg>
                                            shrishyamimpex82@gmail.com
                                        </p>
                                    </div>
                                </nav>
                            </div>
                            {/* <!-- nav - end --> */}
                        </div>

                    </div>
                </div>
                        <div className="py-8 text-center text-sm text-gray-400 bg-white">© 2024 - shrishyamimpex. All rights reserved.</div>
            </footer>
            {/* <!-- footer - end --> */}
        </div>
    )
}
