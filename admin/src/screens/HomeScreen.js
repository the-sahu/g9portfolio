import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";
// import { useSelector } from "react-redux";
// import Scrollbars from "react-custom-scrollbars";
// import "../../node_modules/animate.css/animate.min.css";

// import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <>
      <HomeSlider />
      <div className="bg-primary-50  ">
        <section>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  animateOut="bounceOutLeft"
                >
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                    <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points=" 8,5 8,1 16,1 16,5"
                        strokeLinejoin="round"
                      />
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="9,15 1,15 1,5 23,5 23,15 15,15"
                        strokeLinejoin="round"
                      />
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="22,18 22,23 2,23 2,18"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="9"
                        y="13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        width="6"
                        height="4"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </ScrollAnimation>
                <div className="max-w-xl mb-6">
                  <ScrollAnimation
                    animateIn="bounceInLeft"
                    animateOut="bounceOutLeft"
                    delay={100}
                  >
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                      G9 Solution, <br /> Portfolio Manage
                    </h2>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="bounceInLeft"
                    animateOut="bounceOutLeft"
                    delay={200}
                  >
                    <p className="text-base text-gray-800 md:text-xl font-semibold">
                      You are here to create Wealth for Yourself
                    </p>
                    <p className="text-base text-gray-700 md:text-lg ">
                      Open a FREE demat account. Discover intelligent investing.
                      Choose a pricing plan. Start Your Journey!
                    </p>
                  </ScrollAnimation>
                </div>
                <div>
                  <ScrollAnimation
                    animateIn="bounceInLeft"
                    animateOut="bounceOutLeft"
                    delay={300}
                  >
                    <Link
                      to="/about"
                      aria-label=""
                      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      Know more
                      <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                      </svg>
                    </Link>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="flex items-center justify-center -mx-4 lg:pl-8">
                <div className="flex flex-col items-end px-3">
                  <ScrollAnimation
                    animateIn="animate__zoomIn"
                    animateOut="animate__zoomOut"
                  >
                    <img
                      className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                      src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__zoomIn"
                    animateOut="animate__zoomOut"
                  >
                    <img
                      className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                      src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                  </ScrollAnimation>
                </div>
                <div className="px-3">
                  <ScrollAnimation
                    animateIn="animate__zoomIn"
                    animateOut="animate__zoomOut"
                  >
                    <img
                      className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                      src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                      alt=""
                    />
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about section ends */}

        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={100}
            >
              <div class="p-5 duration-300 h-full w-full transform group hover:bg-primary-500 bg-white border rounded shadow-sm hover:-translate-y-2">
                <div class="flex items-center justify-center w-12 h-12 mb-4 group group-hover:bg-white rounded-full bg-primary-500">
                  <svg
                    class="w-10 h-10 text-white group group-hover:text-primary-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                {/* <h6 class="mb-2 font-semibold leading-5 group group-hover:text-white">The doctor said</h6> */}
                <p class="text-sm text-gray-900 group group-hover:text-white">
                  An IPO is a form of equity financing, where a percentage
                  ownership of a company is given up by the founders in exchange
                  for capital. It is the opposite of debt financing. The IPO
                  process works with a private firm contacting an investment
                  bank that will facilitate the IPO.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={200}
            >
              <div class="p-5 duration-300 h-full w-full transform group hover:bg-primary-500 bg-white border rounded shadow-sm hover:-translate-y-2">
                <div class="flex items-center justify-center w-12 h-12 mb-4 group group-hover:bg-white rounded-full bg-primary-500">
                  <svg
                    class="w-10 h-10 text-white group group-hover:text-primary-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                {/* <h6 class="mb-2 font-semibold leading-5 group group-hover:text-white">That is the true</h6> */}
                <p class="text-sm text-gray-900 group group-hover:text-white">
                  A trading account can be any investment account containing
                  securities, cash or other holdings. Most commonly, trading
                  account refers to a day trader's primary account. ... The
                  assets held in a trading account are separated from others
                  that may be part of a long-term buy and hold strategy.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={300}
            >
              <div class="p-5 duration-300 h-full w-full transform group hover:bg-primary-500 bg-white border rounded shadow-sm hover:-translate-y-2">
                <div class="flex items-center justify-center w-12 h-12 mb-4 group group-hover:bg-white rounded-full bg-primary-500">
                  <svg
                    class="w-10 h-10 text-white group group-hover:text-primary-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                {/* <h6 class="mb-2 font-semibold leading-5 group group-hover:text-white">Those options</h6> */}
                <p class="text-sm text-gray-900 group group-hover:text-white">
                  Demat Account or dematerialised account provides facility of
                  holding shares and securities in electronic format. During
                  online trading, shares are bought and held in a Demat account,
                  thus facilitating easy trade for the users. A Demat Account
                  holds all the investments an individual makes in shares,
                  government securities, exchange-traded funds, bonds and mutual
                  funds in one place{" "}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={400}
            >
              <div class="p-5 duration-300 h-full w-full transform group hover:bg-primary-500 bg-white border rounded shadow-sm hover:-translate-y-2">
                <div class="flex items-center justify-center w-12 h-12 mb-4 group group-hover:bg-white rounded-full bg-primary-500">
                  <svg
                    class="w-10 h-10 text-white group group-hover:text-primary-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                {/* <h6 class="mb-2 font-semibold leading-5 group group-hover:text-white">Swearem ipsum</h6> */}
                <p class="text-sm text-gray-900 group group-hover:text-white">
                  Currency trading, often referred to as foreign exchange or
                  Forex, is the purchasing and selling of currencies in the
                  foreign exchange marketplace, done with the objective of
                  making profits.{" "}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={500}
            >
              <div class="p-5 duration-300 h-full w-full transform group hover:bg-primary-500 bg-white border rounded shadow-sm hover:-translate-y-2">
                <div class="flex items-center justify-center w-12 h-12 mb-4 group group-hover:bg-white rounded-full bg-primary-500">
                  <svg
                    class="w-10 h-10 text-white group group-hover:text-primary-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                {/* <h6 class="mb-2 font-semibold leading-5 group group-hover:text-white">Webtwo ipsum</h6> */}
                <p class="text-sm text-gray-900 group group-hover:text-white">
                  A commodity is a basic good used in commerce that is
                  interchangeable with other goods of the same type. Traditional
                  examples of commodities include grains, gold, beef, oil, and
                  natural gas.{" "}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={600}
            >
              <div class="p-5 duration-300 h-full w-full transform group hover:bg-primary-500 bg-white border rounded shadow-sm hover:-translate-y-2">
                <div class="flex items-center justify-center w-12 h-12 mb-4 group group-hover:bg-white rounded-full bg-primary-500">
                  <svg
                    class="w-10 h-10 text-white group group-hover:text-primary-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
                {/* <h6 class="mb-2 font-semibold leading-5 group group-hover:text-white">Lookout flogging</h6> */}
                <p class="text-sm text-gray-900 group group-hover:text-white">
                  Flatland! Hypatia. Galaxies Orion's sword globular star
                  cluster? Light years quasar as a patch of light gathered by
                  gravity Vangelis radio telescope.
                </p>
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
        {/* testimonials section begins */}
        <section className="bg-gray-50 py-20 ">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary-500">
                  Testimonials
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
                Testimonials
              </h2>
            </ScrollAnimation>
            {/* <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={300}
            >
              <p className="text-base text-gray-700 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                tempora perferendis amet, eveniet fugiat fuga! Sit in aut
                necessitatibus exercitationem.
              </p>
            </ScrollAnimation> */}
          </div>
          <div className="container  px-5 py-8 mx-auto lg:px-24">
            <div className="grid md:grid-cols-3 grid-cols-1 m-4">
              <div className="p-4  h-full w-full">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={0}
                >
                  <div className="flex flex-col w-full h-80 shadow-md rounded-sm transform transition duration-300 hover:-translate-y-2 group hover:bg-primary-500 bg-white">
                    <div className="flex-grow p-4 lg:p-8 bg-blueGray-50 rounded-t-xl">
                      <p className=" font-medium leading-relaxed text-blueGray-700 text-base group-hover:text-white">
                        Just what I was looking for. Portfolio management is the
                        most valuable business resource we have EVER purchased.
                      </p>
                    </div>
                    <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                      <a className="inline-flex items-center">
                        <span className="flex flex-col flex-grow pl-3">
                          <span className="font-medium text-black text-center title-font group-hover:text-white">
                            Joab I
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="p-4  h-full w-full">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={100}
                >
                  <div className="flex flex-col w-full h-80 shadow-md rounded-sm transform transition duration-300 hover:-translate-y-2 group hover:bg-white bg-primary-500">
                    <div className="flex-grow p-4 lg:p-8 bg-blueGray-50 rounded-t-xl">
                      <p className=" font-medium leading-relaxed text-blueGray-700 text-base group-hover:text-primary-900 text-white">
                        Professional, responsive, and able to keep up with
                        ever-changing demand and tight deadlines: That's how I
                        would describe Jeramy and his team at The G9Solution.
                        When it comes to content marketing, you'll definitely
                        get the 5-star treatment from the G9Solution!
                      </p>
                    </div>
                    <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                      <a className="inline-flex items-center">
                        <span className="flex flex-col flex-grow pl-3">
                          <span className="font-medium text-black text-center title-font group-hover:text-primary-900 text-white">
                            Abhishek Pandey
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="p-4  h-full w-full">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={200}
                >
                  <div className="flex flex-col w-full h-80 shadow-md rounded-sm transform transition duration-300 hover:-translate-y-2 group hover:bg-primary-500 bg-white">
                    <div className="flex-grow p-4 lg:p-8 bg-blueGray-50 rounded-t-xl">
                      <p className=" font-medium leading-relaxed text-blueGray-700 text-base group-hover:text-white">
                        After being forced to move twice within five years, our
                        customers had a hard time finding us and our sales
                        plummeted. The G9Solution not only revitalized our
                        brand, but saved our nearly 100-year-old family business
                        from the brink of ruin.
                      </p>
                    </div>
                    <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                      <a className="inline-flex items-center">
                        <span className="flex flex-col flex-grow pl-3">
                          <span className="font-medium text-black text-center title-font group-hover:text-white">
                            Dharmesh Devda
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10">
              <div>
                <Link
                  to="/testimonials"
                  className="items-center justify-center px-5 mx-auto py-2 text-sm flex font-normal leading-6 text-center text-primary-50  transition bg-primary-500 rounded shadow ripple hover:shadow-lg hover:bg-primary-600 focus:outline-none"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* testimonials section ends */}
      </div>
    </>
  );
};

export default HomeScreen;
