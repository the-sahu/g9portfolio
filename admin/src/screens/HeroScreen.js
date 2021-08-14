import React, { useEffect, useState, Fragment } from "react";
import CustomLoader from "../components/CustomLoader";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { listHero, deleteHero, createHero } from "../actions/heroActions";
import { PencilAltIcon } from "@heroicons/react/outline";
const HeroScreen = ({ history }) => {
  const dispatch = useDispatch();

  const heroList = useSelector((state) => state.heroList);
  const { loading, error, heros } = heroList;
  console.log(heros);

  const heroDelete = useSelector((state) => state.heroDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = heroDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listHero());
  }, [history, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteHero(id));
    }
  };

  return (
    <div className=" bg-primary-50 py-20 min-h-screen">
      <div>
        <div className="py-5">
          <h1 className="text-center  md:text-3xl text-primary font-semibold">
            Cover Slider
          </h1>
          <div className="h-px max-w-md my-2 bg-primary-300 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto px-8 bg-white shadow py-16">
          <div className="flex justify-start items-center">
            <div className="  py-1 font-bold  ">
              <Link
                to="/homeSlider/create"
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
          <div className="flex flex-wrap mt-5 -m-4">
            {/* single blog card begins */}
            {heros &&
              heros.map((hero) => (
                <div key={hero._id} className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-white  hover:shadow-md shadow border border-gray-100 p-5 rounded">
                    <img
                      src={hero.image}
                      className="h-40 object-center object-cover w-full"
                      alt={hero.name}
                    />
                    <div className="my-3">
                      <h1 className="text-primary-500 font-bold text-base">
                        {hero.heading}
                      </h1>
                      <p className="text-base">{hero.description}</p>
                    </div>

                    <div className="flex items-center justify-end space-x-3">
                      <button
                        onClick={() => deleteHandler(hero._id)}
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
                        to={`/homeSlider/${hero._id}/edit`}
                        className="flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-primary-500 text-sm transition border border-primary-500 rounded shadow  hover:shadow-md focus:outline-none"
                      >
                        <PencilAltIcon className="h-5 w-5 mr-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            {/* single blog card ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
