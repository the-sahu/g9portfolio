import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Charges = () => {
  return (
    <div>
      {/* main cover */}
      <div
        className="relative py-40 w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url(about.jpg)" }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-green-900 opacity-50"></div>
        <main className="px-4 lg:px-8  z-10 sm:max-w-3xl sm:mx-auto">
          <div className="text-center">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <h2 className="text-3xl mt-10 tracking-tight cap leading-10 font-medium sm:text-3xl text-white md:text-4xl">
                
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
            delay={100}
          >
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
                delay={300}
              >
                <span className="relative">Levels provide service charges</span>
              </ScrollAnimation>
            </span>
          </h2>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutLeft"
            delay={300}
          >
            <p className="text-base text-gray-700 md:text-xl font-bold">
              Equity cash
            </p>
          </ScrollAnimation>
        </div>
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg sm:mx-auto">
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutLeft"
            delay={100}
          >
            <div className="flex flex-col justify-between hoveer:scale-105 hover:shadow-xl p-8 transition-shadow duration-300 bg-white border border-primary-500 rounded shadow-sm sm:items-center hover:shadow">
              <div className="text-center">
                <div className="inline-block px-3 text-white py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary-500">
                  Monthly charges{" "}
                </div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-3xl font-bold text-primary-500">
                    ₹35,000/-
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutLeft"
            delay={300}
          >
            <div className="flex flex-col justify-between hoveer:scale-105 hover:shadow-xl p-8 transition-shadow duration-300 bg-white border border-primary-500 rounded shadow-sm sm:items-center hover:shadow">
              <div className="text-center">
                <div className="inline-block px-3 text-white py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary-500">
                  Quarterly charges{" "}
                </div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-3xl font-bold text-primary-500">
                    ₹75,000/-
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutLeft"
            delay={300}
          >
            <div className="flex flex-col justify-between hoveer:scale-105 hover:shadow-xl p-8 transition-shadow duration-300 bg-white border border-primary-500 rounded shadow-sm sm:items-center hover:shadow">
              <div className="text-center">
                <div className="inline-block px-3 text-white py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary-500">
                  Half yearly charges{" "}
                </div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-3xl font-bold text-primary-500">
                    ₹1,25,000/-
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutLeft"
            delay={500}
          >
            <div className="flex flex-col justify-between hoveer:scale-105 hover:shadow-xl p-8 transition-shadow duration-300 bg-white border border-primary-500 rounded shadow-sm sm:items-center hover:shadow">
              <div className="text-center">
                <div className="inline-block px-3 text-white py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary-500">
                  Annual charges{" "}
                </div>
                <div className="flex items-center justify-center mt-2">
                  <div className="mr-1 text-3xl font-bold text-primary-500">
                    ₹1,50,000/-
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* charges section begins */}
      <section className="bg-green-50">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={100}
            >
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
                  delay={300}
                >
                  <span className="relative">
                    Portfolio Management Service Charges
                  </span>
                </ScrollAnimation>
              </span>
            </h2>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={300}
            >
              <p className="text-base capitalize  text-gray-700 md:text-2xl font-bold">
                over all loss and Profit sharing 80:20
              </p>
            </ScrollAnimation>
          </div>
          <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={300}
            >
              <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-white rounded-sm transition-color sm:items-stretch sm:flex-row">
                <div className="px-12 py-8 text-center">
                  <h6 className="text-4xl font-semibold text-deep-purple-accent-400 sm:text-5xl">
                    ₹0
                  </h6>
                  <p className="text-center md:text-base text-primary-500 font-bold">
                    Brokerage
                  </p>
                </div>
                <div className=" h-1 transition duration-300 transform bg-gray-500 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-0.5" />
                <div className="px-12 py-8 text-center">
                  <h6 className="text-4xl font-semibold text-deep-purple-accent-400 sm:text-5xl">
                    ₹0
                  </h6>
                  <p className="text-center md:text-base text-primary-500 font-bold">
                    No Hidden Charges
                  </p>
                </div>
                <div className=" h-1 transition duration-300 transform bg-gray-500 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-0.5" />
                <div className="px-12 py-8 text-center">
                  <h6 className="text-4xl font-semibold text-deep-purple-accent-400 sm:text-5xl">
                    ₹0
                  </h6>
                  <p className="text-center md:text-base text-primary-500 font-bold">
                    No Advance Fees
                  </p>
                </div>
                <div className=" h-1 transition duration-300 transform bg-gray-500 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-0.5" />
                <div className="px-12 py-8 text-center">
                  <h6 className="text-4xl font-semibold text-deep-purple-accent-400 sm:text-5xl">
                    ₹0
                  </h6>
                  <p className="text-center md:text-base text-primary-500 font-bold">
                    No Annual Maintenance Charges
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      {/* charges section ends */}

      {/* section start */}
      <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
          <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={100}
            >
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Open <span className="text-primary-500"> Free*</span> Demat Account and Start Trading!

            </h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={200}
            >
            <p className="text-base text-gray-700 md:text-lg">
            Futures and options are traded on commodity exchanges like Multi-Commodity Exchange (MCX) and National Commodity and Derivatives Exchange (NCDEX). Only members (brokers) are allowed to trade on these exchange, so you need to open commodity trading account with a broker like  G9 solution.
            </p>
            </ScrollAnimation>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white  border-l-4 shadow-lg border-primary-500">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                OPEN COMMODITY ACCOUNT
                </h6>
                <p className="text-sm text-gray-900">
                  There are two main types of products – futures and options. Futures contracts give you the right to purchase or sell a certain amount of a particular commodity at a predetermined date in the future. Options give you the right, but not the obligation, to buy or sell a specific commodity at a predetermined price in the future.

                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-lg border-primary-500">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold uppercase leading-5">
                Commodity trading account
                </h6>
                <p className="text-sm text-gray-900">
                To trade in commodities, you need to open a commodity trading account with a broker.
This type of trading is essentially in futures and options of products like agriculture (wheat, cotton, etc.), minerals (petroleum), and precious metals (gold, silver, etc.).
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
        <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={400}
            >
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
          </ScrollAnimation>
        </div>
      </div>
    </div>

      </section>
      {/* section ends */}
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
                animateIn="animate__bounceIn"
                animateOut="bounceOutLeft"
                delay={100}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img
                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                    src="bg1.jpg"
                    alt=""
                  />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                    STOCK CASH BASIC
                  </p>
                  <p className="text-gray-700 text-base">
                    Our Stock Cash Basic are offered over instant messenger
                    service and SMS that are mediated through hi-tech software.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__bounceIn"
                animateOut="bounceOutLeft"
                delay={200}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img
                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                    src="bg2.jpg"
                    alt=""
                  />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                    STOCK FUTURE PREMIUM
                  </p>
                  <p className="text-gray-700 text-base">
                    We offer Stock Cash Premium Recommendation at an unmatched
                    accuracy to help our clients earn maximum profit from the
                    exchange.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__bounceIn"
                animateOut="bounceOutLeft"
                delay={300}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img
                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                    src="bg3.jpg"
                    alt=""
                  />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                    STOCK CASH TECHNIQ
                  </p>
                  <p className="text-gray-700 text-base">
                    Our Stock Cash TechniQ help our investors trade the market
                    safely. We cover the stocks cash segments .
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__bounceIn"
                animateOut="bounceOutLeft"
                delay={400}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img
                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                    src="bg3.jpg"
                    alt=""
                  />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                    STOCK FUTURE BASIC
                  </p>
                  <p className="text-gray-700 text-base">
                    Our Recommendation on the stock exchange are completely
                    customized customer service where our customers would get
                    calls in equity.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__bounceIn"
                animateOut="bounceOutLeft"
                delay={500}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img
                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                    src="bg5.jpg"
                    alt=""
                  />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                    STOCK OPTION BASIC
                  </p>
                  <p className="text-gray-700 text-base">
                    At G9Solution, we guide our investors securely to trade the
                    option segment and offer this service for our premium and
                    high net worth
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__bounceIn"
                animateOut="bounceOutLeft"
                delay={600}
              >
                <div className="bg-white p-8 rounded-lg h-full w-full hover:scale-105 transition transform duration-200 hover:shadow-xl">
                  <img
                    className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                    src="bg4.jpg"
                    alt=""
                  />
                  <p className="mb-2 text-xl font-bold leading-none sm:text-lg">
                    INDEX OPTION BASIC
                  </p>
                  <p className="text-gray-700 text-base">
                    At G9Solution, we guide our investors securely to trade the
                    option segment and offer this service for our premium and
                    high net worth.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      {/* services section ends */}
    </div>
  );
};

export default Charges;
