import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const AboutScreen = () => {
  return (
    <>
      <div className="bg-primary-50  ">
        <section
          className="bg-white bg-blend-overlay bg-opacity-90"
          style={{ backgroundImage: "url(about.jpg)" }}
        >
          <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
            <div className="flex flex-col items-center max-w-2xl md:px-8">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary-500">
                      About Us
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
                      <span className="relative">About</span>
                    </span>{" "}
                    Us
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={300}
                >
                  <p className="text-base text-gray-700 md:text-lg">
                    You are here to create Wealth for Yourself Open a FREE demat
                    account. Discover intelligent investing. Choose a pricing
                    plan. Start Your Journey! Having experience of more than 4
                    years and a team of 25 market experts makes us stand out in
                    the market.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div>
              <ScrollAnimation
                animateIn="animate__backInUp"
                // animateOut="bounceOutLeft"
                delay={300}
              >
                <img
                  src="about.jpg"
                  className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
                  alt=""
                />
              </ScrollAnimation>
            </div>
          </div>
        </section>
        {/* about section ends */}
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
                      service and SMS that are mediated through hi-tech
                      software.
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
                      At Profit Aim, we guide our investors securely to trade
                      the option segment and offer this service for our premium
                      and high net worth
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
                      At Profit Aim, we guide our investors securely to trade
                      the option segment and offer this service for our premium
                      and high net worth.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
        {/* services section ends */}
        {/* pricing section begins */}
        <section>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary-500">
                    Pricing
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
                  Unbeatable Pricing
                </h2>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={300}
              >
                <p className="text-base text-gray-700 md:text-lg">
                  We offer intraday trading recommendation for tomorrow,
                  positional trading recommendation, btst stock recommendation,
                  equity trading recommendation, commodity trading
                  recommendation and much more to the customers interested in
                  stock trading.
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
        {/* pricing section ends */}
        {/* team section begins */}
        <section className="bg-gray-50">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={100}
              >
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary-500">
                    Dream Team
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={300}
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
                          id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">Welcome</span>
                  </span>{" "}
                  our talented team of professionals
                </h2>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={400}
              ></ScrollAnimation>
            </div>
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={100}
              >
                <div className="flex">
                <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="krishna_ingle.jpg"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Krishna Ingle</p>
                    {/* <p className="text-sm text-gray-800">Product Manager</p> */}
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={200}
              >
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="suresh_thete.jpg"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Suresh Thete</p>
                    {/* <p className="text-sm text-gray-800">Design Team Lead</p> */}
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={300}
              >
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="devid_stefan.jpg"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">David Stefan</p>
                    {/* <p className="text-sm text-gray-800">CTO, Lorem Inc.</p> */}
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={400}
              >
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="sumit_sahu.jpg"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Sumit Sahu</p>
                    {/* <p className="text-sm text-gray-800">Human Resources</p> */}
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={500}
              >
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="deelip_joshi.jpg"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Deelip Joshi</p>
                    {/* <p className="text-sm text-gray-800">Bad boy</p> */}
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={600}
              >
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="shubha_khote.jpg"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Shubha Khote</p>
                    {/* <p className="text-sm text-gray-800">Backend Developer</p> */}
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={700}
              >
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="nivas_reddy.jpg"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Shri Nivas Reddy</p>
                    {/* <p className="text-sm text-gray-800">Designer UI/UX</p> */}
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
                delay={800}
              >
                <div className="flex">
                  <img
                    className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="shekh.jpg"
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Shekh Hamdan</p>
                    {/* <p className="text-sm text-gray-800">Frontend Developer</p> */}
                  </div>
                </div>
              </ScrollAnimation>
             
            </div>
          </div>
        </section>
        {/* team section ends */}
      </div>
    </>
  );
};

export default AboutScreen;
