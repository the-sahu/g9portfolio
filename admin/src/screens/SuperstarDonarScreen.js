import React, { useEffect, useState, Fragment } from "react";
import CustomLoader from "../components/CustomLoader";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  listSuperstarDonar,
  deleteSuperstarDonar,
} from "../actions/superstarDonarActions";
import { PencilAltIcon } from "@heroicons/react/outline";
const SuperstarDonarScreen = ({ history }) => {
  const dispatch = useDispatch();

  const superstarDonarList = useSelector((state) => state.superstarDonarList);
  const { loading, error, superstarDonars } = superstarDonarList;
  console.log(superstarDonars);

  const superstarDonarDelete = useSelector(
    (state) => state.superstarDonarDelete
  );
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = superstarDonarDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listSuperstarDonar());
  }, [history, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteSuperstarDonar(id));
    }
  };

  return (
    <div className=" bg-primary-50 py-20 min-h-screen">
      <div>
        <div className="py-5">
          <h1 className="text-center  md:text-3xl text-primary font-semibold">
            Superstar Donar
          </h1>
          <div className="h-px max-w-md my-2 bg-primary-300 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto px-8 bg-white shadow py-16">
          <div className="flex justify-start items-center">
            <div className="  py-1 font-bold  ">
              <Link
                to="/superstarDonor/create"
                // onClick={createTestimonialHandler}
                className="flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                New
              </Link>
            </div>
            <div className="h-px w-full my-2 bg-primary-200"></div>
          </div>
          <div className="grid gap-10 mx-auto lg:grid-cols-2 mt-5 lg:max-w-screen-lg">
            {superstarDonars &&
              superstarDonars.map((superstarDonar) => (
                <div key={superstarDonar._id} className="grid sm:grid-cols-3">
                  <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                    <img
                      className="absolute object-cover w-full h-full rounded"
                      src={superstarDonar.image}
                      alt={superstarDonar.name}
                    />
                  </div>
                  <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                    <p className="text-lg font-bold">{superstarDonar.name}</p>
                    <p className="mb-4 text-xs text-gray-800">
                      {superstarDonar.designation}
                    </p>
                    <p className="mb-4 text-sm tracking-wide text-gray-800">
                      {superstarDonar.description}
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-3">
                        <a
                          target="_blank"
                          href={superstarDonar.twitterLink}
                          className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5"
                          >
                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                          </svg>
                        </a>
                        <a
                          target="_blank"
                          href={superstarDonar.fbLink}
                          className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5"
                          >
                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                          </svg>
                        </a>
                      </div>
                      <div className="flex items-center justify-end space-x-3">
                        <button
                          onClick={() => deleteHandler(superstarDonar._id)}
                          className="flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none"
                        >
                          <svg
                            className="w-5 h-5 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                        <Link
                          to={`/superstarDonor/${superstarDonar._id}/edit`}
                          className="flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none"
                        >
                          <PencilAltIcon className="h-5 w-5 mr-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperstarDonarScreen;
