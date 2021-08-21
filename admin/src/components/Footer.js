import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  const [responseMessage, setResponseMessage] = useState(false);
  const refForm = useRef();
  const refFullname = useRef();
  const refEmail = useRef();
  const refMobile = useRef();
  const refMessage = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const form = refForm.current;
    const name = refFullname.current.value;
    const email = refEmail.current.value;
    const mobile = refMobile.current.value;
    const message = refMessage.current.value;

    // console.log(name, email, mobile, message);
    if (name !== "" && mobile.length !== 0 && email !== "" && message !== "") {
      const formData = {
        name,
        email,
        mobile,
        message,
      };
      // Example POST method implementation:
      async function postData(url = "", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response; // parses JSON response into native JavaScript objects
      }
      form.reset();

      postData("/api/contact", formData).then((data) => {
        setResponseMessage(true);
        // console.log(data); // JSON data parsed by `data.json()` call
      });
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setResponseMessage(false);
    }, 5000);
  }, [responseMessage]);


  return (
    <div>
      {/* contact us section begins */}

       {/*  logo section start*/}
       <section className="bg-white">
          <div className="max-w-7xl py-10 mx-auto">
            <div className="grid md:grid-cols-6 grid-cols-3 gap-4">
              <div className="mx-auto">
                <img className="md:h-24 h-20 object-center  w-auto" src="tabu.jfif"/>
              </div>
              <div className="mx-auto">
                <img className="md:h-24 h-20 object-center  w-auto" src="msme.png"/>
              </div>
              <div className="mx-auto">
                <img className="md:h-24 h-20 object-center  w-auto" src="ssl.png"/>
              </div>
              <div className="mx-auto">
                <img className="md:h-24 h-20 object-center  w-auto" src="sebi.png"/>
              </div>
              <div className="mx-auto">
                <img className="md:h-24 h-20 object-center  w-auto" src="iaf.png"/>
              </div>
              <div className="mx-auto">
                <img className="md:h-24 h-20 object-center  w-auto" src="godaddy.png"/>
              </div>
            </div>
          </div>
        </section>
        {/*  logo section ends*/}
      {/* Success response alert */}
      {responseMessage && (
        <div
          className="bg-green-100 border-t-4 z-50 border-green-500 max-w-xl fixed right-0 top-0 m-5 rounded-b text-green-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="w-7 h-7 text-green-600 mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Message Sent</p>
              <p className="text-sm">
                Thank you for sharing you details with us we will contact you
                shortly.
              </p>
            </div>
          </div>
        </div>
      )}
      <section class="w-full bg-cover overflow-y-hidden bg-right-bottom bg-blend-multiply bg-primary-50">
        <div class="mx-auto max-w-7xl">
          <div class="flex flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 ">
              <div class="relative flex flex-col items-start justify-center w-full h-full px-10 my-10 md:my-20 lg:px-16 lg:mt-0 ">
                <div
                  class="flex flex-col items-start space-y-5 md:space-y-8 tracking-tight lg:max-w-3xl"
                  uk-scrollspy="target: > *; cls:uk-animation-slide-bottom-small; delay:200;  repeat:true;"
                >
                  <div class="relative space-y-3">
                    <ScrollAnimation animateIn="bounceInLeft" delay={100}>
                      <h3 class="font-brand uppercase text-primary-500 font-bold">
                        Contact Us
                      </h3>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                      <h2 class="font-brand text-3xl font-semibold tracking-wide text-gray-900 sm:text-4xl sm:leading-none">
                        Get In Touch
                      </h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInLeft" delay={300}>
                      <p class="text-base text-gray-700 md:text-lg">
                        Drop us a line, we'd love to hear from you.
                      </p>
                    </ScrollAnimation>
                  </div>

                  <ScrollAnimation animateIn="bounceInLeft" delay={100}>
                    <div class="flex mt-10 space-x-4 items-start sm:space-x-4">
                      <div class="bg-white flex-shrink-0 shadow text-gray-900  rounded-full  p-1">
                        <svg
                          class="w-10 flex-shrink-0 inline-block text-gray-900  h-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>

                      <div class="space-y-2">
                        <p class="font-bold uppercase  text-gray-800 tracking-wide  font-brand text-base">
                          Address
                        </p>
                        <p class="leading-snug text-normal font-medium text-gray-900">
                          <a href="#" target="_blank">
                           Akola, Balapur road near shivaji park (icon hospital) Akola-444002 Maharashtra India
                          </a>
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                    <div class="flex space-x-4 mt-5 items-start sm:space-x-4">
                      <div class="bg-white shadow text-gray-900  rounded-full  p-1">
                        <svg
                          class="w-10 flex-shrink-0  h-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div class="space-y-2">
                        <p class="font-bold uppercase  text-gray-800 tracking-wide  font-brand text-base">
                          Email
                        </p>
                        <p class="leading-snug text-normal font-medium text-gray-900">
                          <a href="mailto:g9portfoliomng@gmail.com">g9portfoliomng@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="bounceInLeft" delay={300}>
                    <div class="flex  space-x-4 mt-5 items-start sm:space-x-4">
                      <div class="bg-white shadow text-gray-900  rounded-full  p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-10 flex-shrink-0  h-10"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div class="space-y-2">
                        <p class="font-bold uppercase  text-gray-800 tracking-wide  font-brand text-base">
                          Office
                        </p>
                        <p class="leading-snug text-normal font-medium text-gray-900">
                          <a href="tel:7225825884"> 7225825884</a>
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <div class="pt-10 hidden lg:block">
                    <p> © Copyright 2021 G9Solution. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>

 <div
              class="w-full bg-white shadow-xl  lg:w-6/12 xl:w-5/12"
              uk-scrollspy=" cls:uk-animation-fade; delay:200;  repeat:true;"
            >
              <div class="flex flex-col items-center justify-center w-full h-full p-10 lg:p-16 ">
                <h1 className="text-lg text-gray-800 font-brand font-semibold">Hassle Free Account Opening</h1>
                <h4 class="w-full text-3xl text-center font-brand capitalize  text-gray-800 font-semibold">
                  Fill The Form To Open An Account
                </h4>
                <div>
                  <form
                    class="relative w-full mt-10 space-y-3"
                    ref={refForm}
                    onSubmit={submitHandler}
                  >
                    <ScrollAnimation animateIn="bounceInUp" delay={0}>
                      <div class="relative">
                        <label class="font-medium text-gray-800  text-sm uppercase font-brand ">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          ref={refFullname}
                          name="name"
                          class="block w-full px-4 py-3 border mt-2 text-base placeholder-gray-400 bg-gray-50  focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-500 focus:ring-opacity-50"
                          placeholder="Full Name"
                        />
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInUp" delay={100}>
                      <div class="relative">
                        <label class="font-medium text-gray-800  text-sm uppercase font-brand ">
                          Email
                        </label>
                        <input
                          type="text"
                          ref={refEmail}
                          id="email"
                          name="email"
                          class="block w-full px-4 py-3 border mt-2 text-base placeholder-gray-400 bg-gray-50  focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-500 focus:ring-opacity-50"
                          placeholder="*****@**.**"
                        />
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInUp" delay={200}>
                      <div class="relative">
                        <label class="font-medium text-gray-800  text-sm uppercase font-brand ">
                          Mobile
                        </label>
                        <input
                          type="text"
                          id="mobile"
                          ref={refMobile}
                          name="mobile"
                          class="block w-full px-4 py-3 border mt-2 text-base placeholder-gray-400 bg-gray-50  focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-500 focus:ring-opacity-50"
                          placeholder="12345 12345"
                        />
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInUp" delay={300}>
                      <div class="relative">
                        <label class="font-medium text-gray-800  text-sm uppercase font-brand ">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          ref={refMessage}
                          class="block w-full px-4 py-3 border mt-2 text-base placeholder-gray-400 bg-gray-50  focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-500 focus:ring-opacity-50"
                          placeholder="Your message goes here..."
                          cols="30"
                          rows="3"
                        ></textarea>
                      </div>
                    </ScrollAnimation>
                    <div
                      id="ajaxResponseDiv"
                      class="text-green-500 text-center pt-2"
                    ></div>
                    <div class="relative pt-5 ">
                      <button
                        type="submit"
                        id="contact_us_button"
                        onclick="contactForm()"
                        class="inline-block w-full px-5 py-4 text-sm uppercase font-brand shadow-sm  transform hover:-translate-y-2 text-center focus:outline-none text-white transition duration-200 bg-primary-500  hover:bg-primary-600  ease focus:ring-2 ring-offset-2 focus:ring-gray-500 focus:ring-opacity-50  font-normal rounded "
                      >
                        Submit
                      </button>
                    </div>
                    <p class="mt-4 text-gray-500 lg:hidden text-center text-xs">
                      {" "}
                      © Copyright 2021 G9Solution. All rights reserved.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact us section ends */}
    </div>
  );
};

export default Footer;