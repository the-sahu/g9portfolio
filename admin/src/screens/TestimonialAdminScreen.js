import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  listTestimonials,
  deleteTestimonial,
  createTestimonial,
} from "../actions/testimonialActions";
import { TESTIMONIAL_CREATE_RESET } from "../constants/testimonialConstants";

const TestimonialAdminScreen = ({ history }) => {
  const dispatch = useDispatch();

  const testimonialList = useSelector((state) => state.testimonialList);
  const { loading, error, testimonials } = testimonialList;
  // console.log(testimonials);

  const testimonialDelete = useSelector((state) => state.testimonialDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = testimonialDelete;

  const testimonialCreate = useSelector((state) => state.testimonialCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    testimonial: createdTestimonial,
  } = testimonialCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: TESTIMONIAL_CREATE_RESET });

    if (!userInfo) {
      history.push("/mbdd_admin");
    }

    if (successCreate) {
      history.push(`/testimonials/${createdTestimonial._id}/edit`);
    } else {
      dispatch(listTestimonials());
    }
  }, [history, successDelete, successCreate, createdTestimonial, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteTestimonial(id));
    }
  };

  const createTestimonialHandler = () => {
    dispatch(createTestimonial());
  };

  return (
    <div className=" bg-yellow-50 py-20">
      <div className="py-5">
        <h1 className="text-center  md:text-3xl text-blue-dianne font-semibold">
          Testimonials
        </h1>
        <div className="h-px max-w-md my-2 bg-blue-dianne-300 mx-auto"></div>
      </div>
      <div className="max-w-4xl mx-auto px-8 bg-white shadow py-16">
        <div className="flex justify-start items-center">
          <div className="  py-1 font-bold  ">
            <button
              onClick={createTestimonialHandler}
              className="flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-white text-sm transition bg-blue-dianne-500 rounded shadow  hover:shadow-md focus:outline-none"
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
            </button>
          </div>
          <div className="h-px w-full my-2 bg-blue-dianne-200"></div>
        </div>
        <div className="flex flex-wrap mt-5 -m-4">
          {testimonials &&
            testimonials.map((testimonial) => (
              <div key={testimonial._id} className="p-4 md:w-1/3 w-full">
                <div className="h-full bg-white  hover:shadow-md shadow border border-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-sm mb-6">
                    {testimonial.description}
                  </p>
                  <div className="inline-flex items-center">
                    <img
                      alt=""
                      src={testimonial.image}
                      className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="text-sm font-bold  text-blue-dianne-500">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-500  text-xs">
                        {testimonial.designation}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-between mt-3">
                    <Link
                      to={`/testimonials/${testimonial._id}/edit`}
                      className="  py-1 font-bold  "
                    >
                      <button className="flex items-center px-3 py-1 text-md font-medium leading-6 text-center border border-blue-dianne-500 text-white text-sm transition bg-blue-dianne-500 rounded shadow  hover:shadow-md focus:outline-none">
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
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit
                      </button>
                    </Link>
                    <div className="  py-1 font-bold  ">
                      <button
                        onClick={() => deleteHandler(testimonial._id)}
                        className="flex items-center px-3 py-1 text-md font-medium leading-6 text-center text-blue-dianne-500 text-sm transition border border-blue-dianne-500 rounded shadow  hover:shadow-md focus:outline-none"
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
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialAdminScreen;
