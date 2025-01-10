import Image from 'next/image'
import React from 'react'

export default function Gallery() {
    return (
        <div className="container px-6 py-12 mx-auto">
            <div data-aos="fade-up" data-aos-delay="300">

                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Gallery</h1>

                {/* <p className="mt-3 text-gray-500">We’d love to hear from you. Please fill out this form or shoot us an email.</p> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10 mt-10">
                <div data-aos="fade-up" data-aos-delay="400">
                    <img src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="events" className="h-auto max-w-full rounded-lg" />
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                    <img src="https://images.unsplash.com/photo-1605684954998-685c79d6a018?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="events" className="h-auto max-w-full rounded-lg" />
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <img src="https://images.unsplash.com/photo-1619975101891-8dc1c752aece?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="events" className="h-auto max-w-full rounded-lg" />
                </div>
                <div data-aos="fade-up" data-aos-delay="700">
                    <img src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?qauto=format&q=75&fit=crop&w=600" loading="lazy" alt="events" className="h-auto max-w-full rounded-lg" />
                </div>
                <div data-aos="fade-up" data-aos-delay="800">
                    <img src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="events" className="h-auto max-w-full rounded-lg" />
                </div>
                <div data-aos="fade-up" data-aos-delay="900">
                    <img src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="events" className="h-auto max-w-full rounded-lg" />
                </div>
                <div >
                    {/* <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""> */}
                </div>
            </div>
        </div>
    )
}
