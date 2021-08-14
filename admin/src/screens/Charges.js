import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

const Charges = () => {
    return (
        <div>
            {/* main cover */}
            <div className="relative py-40 w-full flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage:"url(about.jpg)"}}>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-green-900 opacity-50"></div>
            <main className="px-4 lg:px-8  z-10 sm:max-w-3xl sm:mx-auto">
            <div className="text-center">
            <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                <h2 className="text-3xl mt-10 tracking-tight leading-10 font-medium sm:text-3xl text-white md:text-4xl">
                Charges
                </h2>
                </ScrollAnimation>
            </div>
            </main>
        </div>
            {/* main cover */}


            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          delay={100} >
            <div>
          
          <p className="inline-block px-3 text-white py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary-500">
            Our Pricing
          </p>
        </div>
        </ScrollAnimation>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                width="52"
                height="24"
              />
            </svg>
            <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          delay={300} >
            <span className="relative">Levels provide service charges</span>
          </ScrollAnimation>
          </span>
        </h2>
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          delay={300} >
        <p className="text-base text-gray-700 md:text-lg">
        Equity cash 

        </p>
        </ScrollAnimation>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg sm:mx-auto">
      <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          delay={100} >
        <div className="flex flex-col justify-between hoveer:scale-105 hover:shadow-xl p-8 transition-shadow duration-300 bg-white border border-primary-500 rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
                <div className="inline-block px-3 text-white py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary-500">Qutarly charges </div>
                    <div className="flex items-center justify-center mt-2">
                    <div className="mr-1 text-3xl font-bold text-primary-500">₹35,000/-</div>
                    </div>
                </div>
            
            </div>
            </ScrollAnimation>
            <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          delay={300} >
        <div className="flex flex-col justify-between hoveer:scale-105 hover:shadow-xl p-8 transition-shadow duration-300 bg-white border border-primary-500 rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
                <div className="inline-block px-3 text-white py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary-500">Monthly charges </div>
                    <div className="flex items-center justify-center mt-2">
                    <div className="mr-1 text-3xl font-bold text-primary-500">₹75,000/-</div>
                    </div>
                </div>
            
            </div>
            </ScrollAnimation>
            <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          delay={300} >
        <div className="flex flex-col justify-between hoveer:scale-105 hover:shadow-xl p-8 transition-shadow duration-300 bg-white border border-primary-500 rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
                <div className="inline-block px-3 text-white py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary-500">Half yearly charges  </div>
                    <div className="flex items-center justify-center mt-2">
                    <div className="mr-1 text-3xl font-bold text-primary-500">₹1,25,000/-</div>
                    </div>
                </div>
            
            </div>
            </ScrollAnimation>
            <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          delay={500} >
        <div className="flex flex-col justify-between hoveer:scale-105 hover:shadow-xl p-8 transition-shadow duration-300 bg-white border border-primary-500 rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
                <div className="inline-block px-3 text-white py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary-500">Half yearly charges  </div>
                    <div className="flex items-center justify-center mt-2">
                    <div className="mr-1 text-3xl font-bold text-primary-500">₹1,25,000/-</div>
                    </div>
                </div>
            
            </div>
            </ScrollAnimation>
       </div>
    </div>

    {/* services section begins */}
    <section className="bg-gray-50">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary-500">
                    Services
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={200}
              >
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">Our</span>
                  </span>{" "}
                  Services
                </h2>
              </ScrollAnimation>

            </div>
            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
              
              <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={100}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="bg1.jpg" alt="" />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                  STOCK CASH BASIC
                  </p>
                  <p className="text-gray-700 text-base">
                  Our Stock Cash Basic are offered over instant messenger service and SMS that are mediated through hi-tech software.
                  </p>
                </div>
                </ScrollAnimation>
                <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={200}
                >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="bg2.jpg" alt="" />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                  STOCK FUTURE PREMIUM
                  </p>
                  <p className="text-gray-700 text-base">
                  We offer Stock Cash Premium Recommendation at an unmatched accuracy to help our clients earn maximum profit from the exchange.
                  </p>
                </div>
                </ScrollAnimation>
                <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={300}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="bg3.jpg" alt="" />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                  STOCK CASH TECHNIQ
                  </p>
                  <p className="text-gray-700 text-base">
                  Our Stock Cash TechniQ help our investors trade the market safely. We cover the stocks cash segments .
                  </p>
                </div>
                </ScrollAnimation>
                <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={400}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="bg3.jpg" alt="" />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                  STOCK FUTURE BASIC
                  </p>
                  <p className="text-gray-700 text-base">
                  Our Recommendation on the stock exchange are completely customized customer service where our customers would get calls in equity.
                  </p>
                </div>
                </ScrollAnimation>
                <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={500}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="bg5.jpg" alt="" />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                  STOCK OPTION BASIC
                  </p>
                  <p className="text-gray-700 text-base">
                  At Profit Aim, we guide our investors securely to trade the option segment and offer this service for our premium and high net worth
                  </p>
                </div>
               </ScrollAnimation>
               <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={600}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="bg4.jpg" alt="" />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                  INDEX OPTION BASIC
                  </p>
                  <p className="text-gray-700 text-base">
                  At Profit Aim, we guide our investors securely to trade the option segment and offer this service for our premium and high net worth.
                  </p>
                </div>
            </ScrollAnimation>
              </div>
              
            </div>
          </div>
        </section>
        {/* services section ends */}

        </div>
    )
}

export default Charges
