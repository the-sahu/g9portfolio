import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Performance = () => {
  return (
    <div>
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
              <h2 className="text-3xl mt-10 tracking-tight leading-10 font-medium sm:text-3xl text-white md:text-4xl">
                Performance
              </h2>
            </ScrollAnimation>
          </div>
        </main>
      </div>

      {/* stats start */}
      <section className="bg-green-50">
      <div className="px-4 bg-green-50 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={200}
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-primary-500 text-white sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={300}
            >
              <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                25+
              </h6>
              <p className="mb-2 font-bold text-md">Market expert </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={400}
            >
              {/* <p className="text-gray-700">
            It’s something that’s many of the wisest people in history have kept
            in mind.
          </p> */}
            </ScrollAnimation>
          </div>

          <div className="text-center">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={200}
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-primary-500 text-white sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={300}
            >
              <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                25000+
              </h6>
              <p className="mb-2 font-bold text-md">Clients</p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={400}
            ></ScrollAnimation>
          </div>

          <div className="text-center">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={200}
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-primary-500 text-white sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={300}
            >
              <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                4+
              </h6>
              <p className="mb-2 font-bold text-md">Experience</p>
            </ScrollAnimation>
          </div>

          <div className="text-center">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={200}
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-primary-500 text-white sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
              delay={300}
            >
              <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                25000+
              </h6>
              <p className="mb-2 font-bold text-md">Downloads</p>
            </ScrollAnimation>+
          </div>
        </div>
      </div>
      </section>
      {/* stats end */}

      {/* details sections start */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          One Online Trading Platform across all devices
        </h2>

      </div>
      <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Anytime, Anywhere</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Get 24*7 access  to your account no. matter where you are.
          </p>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Multiple Devices</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Trade easily from a Desktop, Laptop or Mobile Phone.
          </p>
         
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
</svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Real-Time</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Get updates and information as they happen, instantly.
          </p>
        </div>
      </div>
    </div>

      {/* details sections ends */}
    </div>
  );
};

export default Performance;
