import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  listTestimonialDetails,
  updateTestimonial,
} from "../actions/testimonialActions";
import { TESTIMONIAL_UPDATE_RESET } from "../constants/testimonialConstants";

const TestimonialEditScreen = ({ history, match }) => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const testimonialId = match.params.id;

  const testimonialDetails = useSelector((state) => state.testimonialDetails);
  const { loading, error, testimonial } = testimonialDetails;

  console.log(testimonial);

  const testimonialUpdate = useSelector((state) => state.testimonialUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = testimonialUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      console.log("Success Update Worked");
      dispatch({ type: TESTIMONIAL_UPDATE_RESET });
      history.push("/testimonials");
    } else {
      if (!testimonial.name || testimonial._id !== testimonialId) {
        dispatch(listTestimonialDetails(testimonialId));
      } else {
        setName(testimonial.name);
        setDesignation(testimonial.designation);
        setImage(testimonial.image);
        setDescription(testimonial.description);
      }
    }
  }, [dispatch, history, testimonialId, testimonial, successUpdate]);
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log({
      name,
      designation,
      image,
      description,
    });

    dispatch(
      updateTestimonial({
        _id: testimonialId,
        name,
        designation,
        image,
        description,
      })
    );
  };

  return (
    <div className=" bg-yellow-50 py-20">
      <div className="py-5">
        <h1 className="text-center  md:text-3xl text-blue-dianne-500 font-semibold">
          Testimonial
        </h1>
        <div className="h-px max-w-md my-2 bg-blue-dianne-300 mx-auto"></div>
      </div>
      <div className="max-w-4xl mx-auto px-10 bg-white shadow py-10">
        <div>
          <div className="md:max-w-4xl  mx-auto ">
            <div className="mt-5 md:mt-5 md:col-span-2">
              <form onSubmit={submitHandler}>
                <div className=" sm:rounded-md ">
                  <div className=" flex items-start space-x-10 justify-between">
                    <div className=" mb-4 md:w-1/2 flex flex-col space-y-3 justify-between items-start">
                      <div className="rounded-md w-full ">
                        <label className=" mb-4 text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="appearance-none relative  w-full px-3 py-3 border border-blue-dianne-300 placeholder-blue-dianne-400 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-blue-dianne-500  focus:z-10 sm:text-base"
                          placeholder="Please enter name.."
                        />
                      </div>
                      <div className="rounded-md w-full ">
                        <label className=" mb-4 text-sm font-medium text-gray-700">
                          Designation
                        </label>
                        <input
                          type="text"
                          name="designation"
                          id="designation"
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                          className="appearance-none relative block w-full px-3 py-3 border border-blue-dianne-300 placeholder-blue-dianne-400 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-blue-dianne-500  focus:z-10 sm:text-base"
                          placeholder="Please enter designation.."
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      {image ? (
                        <div className=" block h-40 bg-gray-100 rounded-lg relative">
                          <button
                            onClick={() => setImage("")}
                            className="flex items-center bg-white px-3 py-1 absolute top-0 right-0 text-md font-medium leading-6 text-center text-blue-dianne-500 text-sm transition border border-blue-dianne-500 rounded shadow  hover:shadow-md focus:outline-none"
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
                          <div className="h-40">
                            <img
                              src={image}
                              className=" object-cover h-40 w-auto mx-auto object-center"
                            />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <label className=" text-sm font-medium  text-gray-700">
                            Cover photo
                          </label>
                          <div className="flex justify-center  px-6 pt-5 pb-6 border-2 bg-white border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <input
                                  type="text"
                                  placeholder="Enter image url"
                                  value={image}
                                  onChange={(e) => setImage(e.target.value)}
                                  className="sr-only"
                                />
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-dianne-500 hover:text-blue-dianne-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-dianne-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    onChange={uploadFileHandler}
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 5MB
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="rounded-md ">
                    <div className="rounded-md mb-4">
                      <label className="block pb-2 text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        name="about"
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="appearance-none relative block w-full px-3 py-3 border border-blue-dianne-300 placeholder-blue-dianne-400 text-blue-dianne-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-blue-dianne-500  focus:z-10 sm:text-base"
                        placeholder="Please enter description..."
                      />
                    </div>
                  </div>
                  <div className=" py-1 font-bold flex items-end justify-end ">
                    <button className="flex items-center px-5 py-2 text-base font-medium leading-6 text-center text-white transition bg-blue-dianne-500 rounded shadow  hover:shadow-md focus:outline-none">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialEditScreen;
