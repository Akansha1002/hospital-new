import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <!-- hero - start --> */}
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto">
          <section className="min-h-96 lg:h-[30rem] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48" data-aos="fade-up" data-aos-delay="400">

            {/* <!-- image - start --> */}
            <img src="https://images.unsplash.com/photo-1605684954998-685c79d6a018?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" />
            {/* <!-- image - end --> */}
          </section>
        </div>
      </div>
      {/* <!-- hero - end --> */}

      {/* <!-- gallery - start --> */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12" data-aos="fade-up">Gallery</h2>

          <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
            {/* <!-- image - start --> */}
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80" data-aos="zoom-out">
              <img src="https://images.unsplash.com/photo-1584707824245-f67bad2c62d5?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Face Mask</span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80" data-aos="zoom-out">
              <img src=" https://images.unsplash.com/photo-1673845514907-5258ad7c66f5?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Head Cap</span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80" data-aos="zoom-out">
              <img src="https://images.unsplash.com/photo-1584819762556-68601d7f3a86?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Hand Gloves</span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80" data-aos="zoom-out">
              <img src="https://images.unsplash.com/photo-1681373319693-0f5f3afe8485?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Poly Bag</span>
            </a>
            {/* <!-- image - end --> */}
          </div>

          <div className="flex items-start justify-between gap-8 sm:items-center">
            <p className="max-w-screen-sm text-sm text-gray-500 lg:text-base">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

            <a href="/gallery" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</a>
          </div>
        </div>
      </div>
      {/* <!-- gallery - end --> */}

      <div className="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-4xl" data-aos="fade-up">We Are A Manufacturer For</h2>

          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6" data-aos="flip-left">
              <div className="max-w-md text-center text-white text-lg">Hospitals & Medical Stores</div>
            </div>
            {/* <!-- quote - end --> */}

            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6" data-aos="flip-right">
              <div className="max-w-md text-center text-white text-lg">Hotels & Food Industries</div>
            </div>
            {/* <!-- quote - end --> */}

            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6" data-aos="flip-left">
              <div className="max-w-md text-center text-white text-lg">Pharma Industries</div>
            </div>
            {/* <!-- quote - end --> */}

            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6" data-aos="flip-right">
              <div className="max-w-md text-center text-white text-lg">Chemical Industries</div>
            </div>
            {/* <!-- quote - end --> */}
          </div>
        </div>
      </div>

      {/* <!-- stats - start --> */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-8 md:mb-12">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl" data-aos="fade-up">Our Team by the numbers</h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
            {/* <!-- stat - start --> */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">200</div>
              <div className="text-sm text-indigo-200 sm:text-base">People</div>
            </div>
            {/* <!-- stat - end --> */}

            {/* <!-- stat - start --> */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">500+</div>
              <div className="text-sm text-indigo-200 sm:text-base">People</div>
            </div>

            {/* <!-- stat - start --> */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">1000+</div>
              <div className="text-sm text-indigo-200 sm:text-base">Customers</div>
            </div>
            {/* <!-- stat - end --> */}

            {/* <!-- stat - start --> */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">A couple</div>
              <div className="text-sm text-indigo-200 sm:text-base">Coffee breaks</div>
            </div>
            {/* <!-- stat - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- stats - end --> */}

      {/* <!-- call to action - start --> */}
      <div className="bg-white py-6 sm:py-8 lg:py-12 border-b">
        <div className="mx-auto px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
            {/* <!-- image - start --> */}
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img src="https://plus.unsplash.com/premium_photo-1661627136784-ff7e699dbf3f?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Andras Vas" className="h-full w-full object-cover object-center" />
            </div>
            {/* <!-- image - end --> */}
    
            {/* <!-- content - start --> */}
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Why Choose Us?</h2>

              <p className="mb-8 max-w-3xl text-gray-600">
                We are amongst the leading manufacturers suppliers, exporters
                and importer of the the highly commendable and diverse range
                of hand protection, Face Mask, Disposable Bouffant Cap, PE Shoe
                Cover, Non Woven Shoe Cover, PP Gloves, Polybag, PVC Shrink, PE
                Apron.
              </p>

              <div className="mt-auto">
                <a href="/about-us" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Know More</a>
              </div>
            </div>
            {/* <!-- content - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- call to action - end --> */}

      {/* <Footer /> */}
    </div>
  );
}
