import React from 'react'

export default function ContactUs() {
  return (
    <section>
      <div className="container px-6 py-12 mx-auto">
        <div data-aos="fade-up" data-aos-delay="400">
          <h1 className="text-2xl font-semibold text-gray-800 md:text-3xl">Contact us</h1>

          {/* <p className="font-medium text-indigo-500 mt-2">Chat to our friendly team</p> */}

          <p className="mt-3 text-gray-500">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className='p-4 rounded-lg bg-indigo-50 md:p-6' data-aos="fade-up" data-aos-delay="500">
              <span className="inline-block p-3 text-indigo-500 rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2>
              <p className="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
              <p className="mt-2 text-sm text-indigo-500">shrishyamimpex82@gmail.com</p>
            </div>

            <div className='p-4 rounded-lg bg-indigo-50 md:p-6' data-aos="fade-up" data-aos-delay="500">
              <span className="inline-block p-3 text-indigo-500 rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#6366f1" viewBox="0 0 512 512" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                  {/* <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /> */}
                </svg>              
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">Website</h2>
              <p className="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
              <p className="mt-2 text-sm text-indigo-500">www.shrishyamimpex.net</p>
            </div>

            <div className='p-4 rounded-lg bg-indigo-50 md:p-6' data-aos="fade-up" data-aos-delay="600">
              <span className="inline-block p-3 text-indigo-500 rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">Office</h2>
              <p className="mt-2 text-sm text-gray-500">Come say hello at our office HQ.</p>
              <p className="mt-2 text-sm text-indigo-500">
                Plot No 82/9, Near Kailash Vihar, HPSIDC, Industrial Area Baddi, Distt-Solan, Himachal Pradesh
              </p>
            </div>

            <div className='p-4 rounded-lg bg-indigo-50 md:p-6' data-aos="fade-up" data-aos-delay="600">
              <span className="inline-block p-3 text-indigo-500 rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">Phone</h2>
              {/* <p className="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p> */}
              <p className="mt-2 text-sm text-indigo-500">+91 92186 20013</p>
              <p className="mt-2 text-sm text-indigo-500">+91 98767 27576</p>
            </div>
          </div>

          <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8" data-aos="fade-up" data-aos-delay="500">
            <form>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600">First Name</label>
                  <input type="text" placeholder="first name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600">Last Name</label>
                  <input type="text" placeholder="last name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600">Email address</label>
                <input type="email" placeholder="email" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600">Description</label>
                <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Description of requirements in Detail"></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
