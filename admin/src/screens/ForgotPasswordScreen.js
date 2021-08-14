import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./ForgotPasswordScreen.css";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/users/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  }, [success]);

  return (
    <div className=" bg-yellow-50 py-40">
      <div className=" bg-white lg:w-1/3 mx-auto  shadow">
        <div className="p-10">
          <h2 className="text-2xl mb-5 font-semibold text-blue-dianne-500 text-center">
            Forgot Password
          </h2>
          <p className="pb-5 text-center text-blue-dianne-500">
            {" "}
            Please enter the email address you registered your account with. We
            will send you reset password confirmation to this email
          </p>

          <form onSubmit={forgotPasswordHandler} className="">
            <div className="space-y-5">
              <input
                type="email"
                required
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-3 border border-blue-dianne-300 placeholder-blue-dianne-500 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-blue-dianne-500 focus:ring-2 transition duration-200 focus:ring-offset-2 focus:z-10 sm:text-base"
              />

              {error && (
                <div className="alert mt-2  alert-error">
                  <div className="flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 mx-2 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      ></path>
                    </svg>
                    <label>{error}</label>
                  </div>
                </div>
              )}
              {success && (
                <div className="alert mt-2  bg-green-100 rounded-lg ">
                  <div className="flex-1 flex items-center justify-start space-x-3 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-2 stroke-current feather feather-check-circle"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <label>{success}</label>
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-dianne-600 hover:bg-blue-dianne-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-dianne-500"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
