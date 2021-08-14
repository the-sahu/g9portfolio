import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import "./ResetPasswordScreen.css";

const ResetPasswordScreen = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `/api/users/resetpassword/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-yellow-50">
      <div className="max-w-md w-full md:p-10 shadow bg-white  space-y-8">
        <div className="card-body">
          <h2 className="mb-5 text-center text-2xl font-semibold  capitalize text-blue-dianne-900">
            Forgot Password
          </h2>
          <p className="text-center  leading-6">
            {" "}
            Please enter the email address you registered your account with. We
            will send you reset password confirmation to this email
          </p>

          <form onSubmit={resetPasswordHandler} className="">
            <div className="form-control space-y-3 mt-5">
              <div className="form-control">
                <input
                  type="password"
                  required
                  id="password"
                  placeholder="Enter new password"
                  autoComplete="true"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-3 border bg-gray-50 border-blue-dianne-300 placeholder-blue-dianne-500 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-blue-dianne-500  focus:z-10 sm:text-base"
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  required
                  id="confirmpassword"
                  placeholder="Confirm new password"
                  autoComplete="true"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-3 bg-gray-50 border border-blue-dianne-300 placeholder-blue-dianne-500 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-blue-dianne-500  focus:z-10 sm:text-base"
                />
              </div>

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
                <div className="alert mt-2  bg-green-100 rounded-lg text-green-600 ">
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
                    <label>{success}</label>{" "}
                    <Link to="/" className="text-green-700 font-semibold">
                      Login
                    </Link>
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-dianne-600 hover:bg-blue-dianne-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-dianne-500"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
