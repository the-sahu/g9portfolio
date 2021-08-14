import React from 'react'
import { Link } from 'react-router-dom'


const CareerEditScreen = () => {
    return (
        <div className=" bg-yellow-50">
            <div className="max-w-5xl mx-auto px-5 bg-white shadow-lg py-24">

          <div className="">
            <h1 className="text-center  md:text-2xl text-black font-semibold">Career/create</h1>
            <div className="h-0.5 w-24 my-2 bg-yellow-500 mx-auto"></div>
          </div>
          <div>
        <div className="md:max-w-4xl shadow-md  mx-auto ">
          
          <div className="mt-5 md:mt-5 md:col-span-2">
            <form action="#" className="bg-yellow-50" method="POST">
              <div className="shadow sm:rounded-md  sm:overflow-hidden">
                <div className="px-4 py-5  space-y-6 sm:p-6">
                      <div className="rounded-md shadow-sm">
                        <label  className="block pb-3 text-sm font-medium text-gray-700">
                            Title
                        </label>
                            <input
                            type="text"
                            name="company_website"
                            id="company_website"
                            className=" flex-1 block w-full rounded-lg  border sm:text-sm p-3 border-gray-300"
                            placeholder="Please enter title.."
                            />
                      </div>
                      <div className="rounded-md shadow-sm">
                        <label  className="block pb-3 text-sm font-medium text-gray-700">
                            Designation
                        </label>
                            <input
                            type="text"
                            name="company_website"
                            id="company_website"
                            className=" flex-1 block w-full rounded-lg  border sm:text-sm p-3 border-gray-300"
                            placeholder="Please enter Designation.."
                            />
                      </div>
                      <div className="rounded-md shadow-sm">
                        <label  className="block pb-3 text-sm font-medium text-gray-700">
                            Location
                        </label>
                            <input
                            type="text"
                            name="company_website"
                            id="company_website"
                            className=" flex-1 block w-full rounded-lg  border sm:text-sm p-3 border-gray-300"
                            placeholder="Please enter location.."
                            />
                      </div>
                      <div className="rounded-md shadow-sm">
                        <label  className="block pb-3 text-sm font-medium text-gray-700">
                            Qualification
                        </label>
                            <input
                            type="text"
                            name="company_website"
                            id="company_website"
                            className=" flex-1 block w-full rounded-lg  border sm:text-sm p-3 border-gray-300"
                            placeholder="Please enter Qualification.."
                            />
                      </div>
                      <div className="rounded-md shadow-sm">
                        <label  className="block pb-3 text-sm font-medium text-gray-700">
                            Experience
                        </label>
                            <input
                            type="text"
                            name="company_website"
                            id="company_website"
                            className=" flex-1 block w-full rounded-lg  border sm:text-sm p-3 border-gray-300"
                            placeholder="Please enter Experience.."
                            />
                      </div>
                      <div className="rounded-md shadow-sm">
                        <label  className="block pb-3 text-sm font-medium text-gray-700">
                            Description
                            </label>
                            <textarea
                        
                        name="about"
                        rows={5}
                        className="shadow-sm mt-1 block w-full p-3 sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Please enter description..."

                      />
                      </div>
                    <div>
                    
                    </div>
                 
                </div>
                <div className="px-4 py-3 mb-3 bg-yellow-50 text-left sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-1 text-lg px-5 border border-transparent shadow-sm  font-medium rounded-md text-white bg-brand hover:bg-yellow-600 "
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

     
          

    </div>
        </div>
    )
}

export default CareerEditScreen
