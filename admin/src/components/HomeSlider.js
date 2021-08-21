import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollAnimation from "react-animate-on-scroll";

const HomeSLider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="p-0">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <div className="lg:h-screen p-0">
          <div className="relative">
            <img
              src="sebicover.jpg"
              className="relative object-cover  h-full w-full"
            />
            <div className="bg-gray-900 bg-opacity-30 absolute inset-0"></div>
          </div>
          <div className="absolute top-5 left-5 lg:top-60 lg:left-56 max-w-xl">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutRight"
              delay={200}
            >
              <h1 className="text-white  opacity-100 lg:text-4xl text-xl capitalize font-semibold">
              Hassle Free Account Opening
              </h1>
            </ScrollAnimation>
          </div>
        </div>
        <div className="lg:h-screen p-0">
          <div className="relative">
            <img
              src="bg1.jpg"
              className="relative object-cover  h-full w-full"
            />
            <div className="bg-gray-900 bg-opacity-30 absolute inset-0"></div>
          </div>
          <div className="absolute top-5 left-5 lg:top-48 lg:left-56 max-w-xl">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutRight"
              delay={200}
            >
              <h1 className="text-white  opacity-100 lg:text-4xl text-xl capitalize font-semibold">
                make the best trades to earn best Returns
              </h1>
            </ScrollAnimation>
          </div>
        </div>
        <div className="lg:h-screen p-0">
          <div className="relative">
            <img
              src="bg2.jpg"
              className="relative object-cover  h-full w-full"
            />
            <div className="bg-gray-900  bg-opacity-30 absolute inset-0"></div>
          </div>
          <div className="absolute top-72 left-56 max-w-xl">
            <h1 className="text-white  opacity-100 text-4xl capitalize font-semibold">
              We Can Add Value To Your Business.
            </h1>
          </div>
        </div>
        <div className="lg:h-screen p-0">
          <div className="relative">
            <img
              src="bg3.jpg"
              className="relative object-cover  h-full w-full"
            />
            <div className="bg-gray-900  bg-opacity-30 absolute inset-0"></div>
          </div>
          <div className="absolute top-72 left-56 max-w-xl">
            <h1 className="text-white opacity-100 text-4xl capitalize font-semibold">
              Invest in 100% Tested Strategy to Multiply your Investment.
            </h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeSLider;
