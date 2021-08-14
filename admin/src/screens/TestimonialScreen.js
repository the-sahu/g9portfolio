import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const TestimonialScreen = () => {
  return (
    <>
      <div className="bg-primary-50  ">
        <section
          className=" bg-cover bg-white bg-blend-overlay bg-opacity-90 bg-right-bottom"
          style={{ backgroundImage: "url(about.jpg)" }}
        >
          <div className="px-4 py-40 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:pt-52">
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
                    <span className="relative">Testimonials</span>
                  </span>{" "}
                </h2>
              </ScrollAnimation>
              
            </div>
          </div>
        </section>
        {/* testimonials section begins */}
        <section className="bg-gray-50 py-20 ">
          <div className="container  px-5 py-8 mx-auto lg:px-24">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3 h-full ">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={50}
                >
                  <div className="flex flex-col h-80 shadow-md rounded-sm transform transition duration-300 hover:-translate-y-2 group hover:bg-primary-500 bg-white">
                    <div className="flex-grow p-4 lg:p-8 bg-blueGray-50 rounded-t-xl">
                      <p className=" font-medium leading-relaxed text-blueGray-700 text-base group-hover:text-white">
                      "Just what I was looking for. Portfolio management is the most valuable business resource we have EVER purchased."

                      </p>
                    </div>
                    <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                      <a className="inline-flex items-center">

                        <span className="flex flex-col flex-grow pl-3">
                          <span className="font-medium text-black title-font group-hover:text-white">
                          - Joab I.
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="p-4 md:w-1/3 h-full ">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={100}
                >
                  <div className="flex flex-col h-80 shadow-md rounded-sm transform transition duration-300 hover:-translate-y-2 group hover:bg-primary-500 bg-white">
                    <div className="flex-grow p-4 lg:p-8 bg-blueGray-50 rounded-t-xl">
                      <p className=" font-medium leading-relaxed text-blueGray-700 text-base group-hover:text-white">
                      Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The G9Solution. When it comes to content marketing, you'll definitely get the 5-star treatment from the G9Solution!

                      </p>
                    </div>
                  
                    <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                      <a className="inline-flex items-center">

                        <span className="flex flex-col flex-grow pl-3">
                          <span className="font-medium text-black title-font group-hover:text-white">
                          Abhishek Pandey
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="p-4 md:w-1/3 h-full ">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={200}
                >
                  <div className="flex flex-col h-80 shadow-md rounded-sm transform transition duration-300 hover:-translate-y-2 group hover:bg-primary-500 bg-white">
                    <div className="flex-grow p-4 lg:p-8 bg-blueGray-50 rounded-t-xl">
                      <p className=" font-medium leading-relaxed text-blueGray-700 text-base group-hover:text-white">
                      After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The G9Solution not only revitalized our brand, but saved our nearly 100-year-old family business from the brink of ruin.

                      </p>
                    </div>
                    <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                      <a className="inline-flex items-center">

                        <span className="flex flex-col flex-grow pl-3">
                          <span className="font-medium text-black title-font group-hover:text-white">
                          Dharmesh Devda
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="p-4 md:w-1/3 h-full ">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={300}
                >
                  <div className="flex flex-col h-80 shadow-md rounded-sm transform transition duration-300 hover:-translate-y-2 group hover:bg-primary-500 bg-white">
                    <div className="flex-grow p-4 lg:p-8 bg-blueGray-50 rounded-t-xl">
                      <p className=" font-medium leading-relaxed text-blueGray-700 text-base group-hover:text-white">
                      “The G9Solution has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2018.”

                      </p>
                    </div>
                    <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                      <a className="inline-flex items-center">

                        <span className="flex flex-col flex-grow pl-3">
                          <span className="font-medium text-black title-font group-hover:text-white">
                          John Doe 
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="p-4 md:w-1/3 h-full ">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={400}
                >
                  <div className="flex flex-col h-80 shadow-md rounded-sm transform transition duration-300 hover:-translate-y-2 group hover:bg-primary-500 bg-white">
                    <div className="flex-grow p-4 lg:p-8 bg-blueGray-50 rounded-t-xl">
                      <p className=" font-medium leading-relaxed text-blueGray-700 text-base group-hover:text-white">
                      “I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.

                      </p>
                    </div>
                    <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                      <a className="inline-flex items-center">

                        <span className="flex flex-col flex-grow pl-3">
                          <span className="font-medium text-black title-font group-hover:text-white">
                          Dorothee Sarah
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="p-4 md:w-1/3 h-full ">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={500}
                >
                  <div className="flex flex-col h-80 shadow-md rounded-sm transform transition duration-300 hover:-translate-y-2 group hover:bg-primary-500 bg-white">
                    <div className="flex-grow p-4 lg:p-8 bg-blueGray-50 rounded-t-xl">
                      <p className=" font-medium leading-relaxed text-blueGray-700 text-base group-hover:text-white">
                        Hey man, look at Marvin's hand. He can't play with his
                        hands like that, and we can't play without him. Silence
                        Earthling. my name is Darth Vader. I'm am an
                        extra-terrestrial from the planet Vulcan.{" "}
                      </p>
                    </div>
                    <div className="px-6 py-4 bg-blueGray-100 rounded-b-xl">
                      <a className="inline-flex items-center">

                        <span className="flex flex-col flex-grow pl-3">
                          <span className="font-medium text-black title-font group-hover:text-white">
                            Rasmus Doe
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
        {/* testimonials section ends */}
      </div>
    </>
  );
};

export default TestimonialScreen;
