import React from 'react'

export default function AboutUs() {
    return (
        <div>
            <div className="pb-6 sm:pb-8 lg:pb-20">
                <div className="mx-auto">
                    <section className="min-h-96 lg:h-[30rem] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-16 shadow-lg md:py-20" data-aos="fade-up" data-aos-delay="400">
                        {/* image - start  */}
                        <img src="https://plus.unsplash.com/premium_photo-1661632237873-3d50504ffaee?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="image" className="absolute inset-0 h-full w-full object-cover object-center" />
                        {/* image - end */}
                    </section>
                </div>
            </div>

            <div className="py-6 sm:py-8 lg:py-12 bg-gray-100">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* text - start  */}
                    <div className="mb-10 md:mb-16" data-aos="fade-up" data-aos-delay="400">
                        <h2 className="mb-4 text-center text-3xl font-bold text-black md:mb-6 lg:text-3xl">Company Details</h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>
                    {/* text - end  */}

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                        {/* article - start  */}
                        <a href="#" className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96" data-aos="fade-up">
                            <img src=" https://images.unsplash.com/photo-1584707824245-f67bad2c62d5?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="events" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                            <div className="relative mt-auto p-4">
                                <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Face Mask</h2>
                                <span className="block text-sm text-gray-200 hover:underline">Read More</span>
                            </div>
                        </a>
                        {/* article - end  */}

                        {/* article - start */}
                        <a href="#" className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96" data-aos="fade-up" data-aos-delay="150">
                            <img src="https://images.unsplash.com/photo-1673845514907-5258ad7c66f5?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="events" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                            <div className="relative mt-auto p-4">
                                <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Head Cap</h2>
                                <span className="block text-sm text-gray-200 hover:underline">Read More</span>
                            </div>
                        </a>
                        {/* article - end  */}

                        {/* article - start  */}
                        <a href="#" className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96" data-aos="fade-up" data-aos-delay="200">
                            <img src="https://images.unsplash.com/photo-1584819762556-68601d7f3a86?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="events" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                            <div className="relative mt-auto p-4">
                                <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Hand Gloves</h2>
                                <span className="block text-sm text-gray-200 hover:underline">Read More</span>
                            </div>
                        </a>
                        {/* article - end  */}

                        {/* article - start */}
                        <a href="#" className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96" data-aos="fade-up" data-aos-delay="250">
                            <img src="https://images.unsplash.com/photo-1681373319693-0f5f3afe8485?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="events" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

                            <div className="relative mt-auto p-4">
                                <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Poly Bag</h2>
                                <span className="block text-sm text-gray-200 hover:underline">Read More</span>
                            </div>
                        </a>
                        {/* article - end  */}
                    </div>
                </div>
            </div>
        </div>
    )
}
