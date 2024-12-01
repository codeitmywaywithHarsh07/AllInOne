'use client'
import React from 'react'
import Image from "next/image";

const Features = () => {
  return (
    <>
        <section className="py-24 px-10 bg-gray-100">
            <div className="container mx-auto flex flex-col gap-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">Why Choose AllInOne?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                        <div className="relative">
                            <Image src="/media/search.png" alt="Search" width={80} height={80} className="mx-auto" />
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-1 bg-blue-600 rounded-full animate-ping"></div>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 text-gray-700">Powerful Search</h3>
                        <p className="text-gray-600 mt-2">Search across multiple platforms effortlessly from one place.</p>
                    </div>


                    {/* Feature 2 */}

                    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                        <div className="relative">
                            <Image src="/media/customize.png" alt="Customize" width={80} height={80} className="mx-auto" />
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-1 bg-blue-600 rounded-full animate-ping"></div>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 text-gray-700">Customizable Experience</h3>
                        <p className="text-gray-600 mt-2">Tailor your searches to match your exact preferences and needs.</p>
                    </div>


                    {/* Feature 3 */}
                    
                    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1">
                        <div className="relative">
                            <Image src="/media/time.png" alt="Save Time" width={80} height={80} className="mx-auto" />
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-1 bg-blue-600 rounded-full animate-ping"></div>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 text-gray-700">Save Time</h3>
                        <p className="text-gray-600 mt-2">Get results faster with our optimized search engine integration.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features