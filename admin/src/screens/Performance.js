import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

const Performance = () => {
    return (
        <div>
            <div className="relative py-40 w-full flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage:"url(about.jpg)"}}>
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
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
            2500+
          </h6>
          <p className="mb-2 font-bold text-md">Clients</p>
          </ScrollAnimation>
          <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={400}
                >
          
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
            4+
          </h6>
          <p className="mb-2 font-bold text-md">Experience</p>
          </ScrollAnimation>
          <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={400}
                >
          <p className="text-gray-700">
            It’s something that’s many of the wisest people in history have kept
            in mind.
          </p>
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
            819
          </h6>
          <p className="mb-2 font-bold text-md">Downloads</p>
          </ScrollAnimation>
          <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                  delay={400}
                >
          <p className="text-gray-700">
            It’s something that’s many of the wisest people in history have kept
            in mind.
          </p>
          </ScrollAnimation>
        </div>
       
      </div>
    </div>
        {/* stats end */}
        </div>
    )
}

export default Performance
