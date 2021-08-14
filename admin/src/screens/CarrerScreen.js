import React from 'react'
import { Link } from 'react-router-dom'


const CareerScreen = () => {
    return (
        <div className=" bg-yellow-50">
            <div className="max-w-5xl mx-auto px-5 bg-white shadow-lg py-24">

          <div className="">
            <h1 className="text-center  md:text-2xl text-black font-semibold">Career</h1>
            <div className="h-0.5 w-24 my-2 bg-yellow-500 mx-auto"></div>
          </div>
          <div>
                <Link to="/career/create" className="block  py-1 font-bold  "  > 
                    <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-brand rounded shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        New
                    </button>
                </Link>
            </div>
            <div className="flex flex-wrap mt-5 -m-4">
                <div className="p-4 md:w-1/3 w-full">
                    <div className="h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded">
                    <h1 className="text-xl font-semibold">Title</h1>                    
                    <p className="leading-relaxed">Designation </p>
                    <p className="leading mb-6">lorem ipsum dolear this is the this is demo paragraog of the  lorem. </p>

                        <div className="flex flex-wrap mt-3">
                            <Link className="block  py-1 font-bold mr-2 "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            </button>
                            </Link>
                            <Link className="block  py-1 font-bold  "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 w-full">
                    <div className="h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded">
                    <h1 className="text-xl font-semibold">Title</h1>                    
                    <p className="leading-relaxed">Designation </p>
                    <p className="leading mb-6">lorem ipsum dolear this is the this is demo paragraog of the  lorem. </p>

                        <div className="flex flex-wrap mt-3">
                            <Link className="block  py-1 font-bold mr-2 "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            </button>
                            </Link>
                            <Link className="block  py-1 font-bold  "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 w-full">
                    <div className="h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded">
                    <h1 className="text-xl font-semibold">Title</h1>                    
                    <p className="leading-relaxed">Designation </p>
                    <p className="leading mb-6">lorem ipsum dolear this is the this is demo paragraog of the  lorem. </p>

                        <div className="flex flex-wrap mt-3">
                            <Link className="block  py-1 font-bold mr-2 "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            </button>
                            </Link>
                            <Link className="block  py-1 font-bold  "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 w-full">
                    <div className="h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded">
                    <h1 className="text-xl font-semibold">Title</h1>                    
                    <p className="leading-relaxed">Designation </p>
                    <p className="leading mb-6">lorem ipsum dolear this is the this is demo paragraog of the  lorem. </p>

                        <div className="flex flex-wrap mt-3">
                            <Link className="block  py-1 font-bold mr-2 "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            </button>
                            </Link>
                            <Link className="block  py-1 font-bold  "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 w-full">
                    <div className="h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded">
                    <h1 className="text-xl font-semibold">Title</h1>                    
                    <p className="leading-relaxed">Designation </p>
                    <p className="leading mb-6">lorem ipsum dolear this is the this is demo paragraog of the  lorem. </p>

                        <div className="flex flex-wrap mt-3">
                            <Link className="block  py-1 font-bold mr-2 "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            </button>
                            </Link>
                            <Link className="block  py-1 font-bold  "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 w-full">
                    <div className="h-full bg-white hover:bg-yellow-50 hover:shadow-xl shadow-md p-8 rounded">
                    <h1 className="text-xl font-semibold">Title</h1>                    
                    <p className="leading-relaxed">Designation </p>
                    <p className="leading mb-6">lorem ipsum dolear this is the this is demo paragraog of the  lorem. </p>

                        <div className="flex flex-wrap mt-3">
                            <Link className="block  py-1 font-bold mr-2 "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            </button>
                            </Link>
                            <Link className="block  py-1 font-bold  "  > 
                            <button className="flex items-center px-5 py-2 text-md font-medium leading-6 text-center text-white text-lg transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
    </div>
        </div>
    )
}

export default CareerScreen
