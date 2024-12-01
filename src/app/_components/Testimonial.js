import React from 'react'
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
        <section className="py-20 px-10 bg-gray-100">
            <div className="container mx-auto flex flex-col gap-14">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}

                <div className="p-6 bg-white rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                    <Image
                        src="/media/user1.jpg"
                        alt="User"
                        width={70}
                        height={70}
                        className="rounded-full mx-auto"
                    />
                    <p className="mt-4 text-gray-600 italic">"AllInOne has made my searches so much easier. I can now explore Google, YouTube, and Reddit from one place!"</p>
                    <h3 className="mt-4 font-semibold text-gray-700">John Doe</h3>
                </div>

                {/* Testimonial 2 */}

                <div className="p-6 bg-white rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                    <Image
                        src="/media/user2.jpeg"
                        alt="User"
                        width={70}
                        height={70}
                        className="rounded-full mx-auto"
                    />
                    <p className="mt-4 text-gray-600 italic">"The intuitive design and fast results are a game-changer for me. Highly recommend it!"</p>
                    <h3 className="mt-4 font-semibold text-gray-700">Jane Smith</h3>
                </div>


                {/* Testimonial 3 */}
                
                <div className="p-6 bg-white rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                    <Image
                        src="/media/user3.jpeg"
                        alt="User"
                        width={70}
                        height={70}
                        className="rounded-full mx-auto"
                    />
                    <p className="mt-4 text-gray-600 italic">"A one-stop solution for all my searching needs. It's fast, reliable, and user-friendly."</p>
                    <h3 className="mt-4 font-semibold text-gray-700">Alex Brown</h3>
                </div>
                
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonial