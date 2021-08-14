import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import CustomLoader from "../components/CustomLoader";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { createSuperstarDonar } from "../actions/superstarDonarActions";
import { TrashIcon } from "@heroicons/react/outline";
const SuperstarDonarCreateScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [fbLink, setFbLink] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const superstarDonarCreate = useSelector(
    (state) => state.superstarDonarCreate
  );

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    superstarDonar: createdSuperstarDonar,
  } = superstarDonarCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/mbdd_admin");
    }

    if (successCreate) {
      history.push("/superstarDonor");
    } else {
      setName("");
      setDesignation("");
      setDescription("");
      setTwitterLink("");
      setFbLink("");
      setImage("");
    }
  }, [history, successCreate, createdSuperstarDonar, userInfo]);

  const createSuperstarDonarHandler = () => {
    dispatch(createSuperstarDonar());
  };

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
      description,
      twitterLink,
      fbLink,
      image,
    });

    dispatch(
      createSuperstarDonar({
        name,
        designation,
        description,
        twitterLink,
        fbLink,
        image,
      })
    );
  };

  return (
    <div className=" bg-primary-50 py-20 min-h-screen">
      {uploading ? (
        <div className="fixed inset-0 bg-primary-500 bg-opacity-20">
          <CustomLoader />
        </div>
      ) : (
        <>
          <div className="py-5">
            <h1 className="text-center  md:text-3xl text-primary font-semibold">
              Create New Superstar Donor
            </h1>
            <div className="h-px max-w-md my-2 bg-primary-300 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto px-8 bg-white shadow py-16">
            <div className="flex items-center justify-start space-x-10">
              <form onSubmit={submitHandler} className="w-full">
                <label className=" text-sm font-medium  text-gray-700">
                  Cover photo
                </label>
                <div className="flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-96 border-gray-300 border-dashed rounded-md">
                  {!image ? (
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
                          className="relative cursor-pointer bg-white rounded-md font-medium text-primary-500 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
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
                        PNG &amp; JPG to 2MB
                      </p>
                      <p className="text-xs text-gray-500">
                        Size: 400x400 pixels
                      </p>
                    </div>
                  ) : (
                    <div className="h-96 w-full p-5">
                      <div
                        className="bg-gray-100 cursor-pointer p-2 w-8 h-8 "
                        onClick={(e) => setImage("")}
                      >
                        <TrashIcon className="h-5 w-5  mx-auto" />
                      </div>
                      <img
                        src={image}
                        className="h-80 w-auto mx-auto object-cover object-center"
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center mt-5 justify-between space-x-10">
                  <div className="rounded-md w-1/2 ">
                    <label className=" mb-4 text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="heading"
                      id="heading"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                      placeholder="Please enter heading.."
                    />
                  </div>
                  <div className="rounded-md w-1/2 ">
                    <label className=" mb-4 text-sm font-medium text-gray-700">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="heading"
                      id="heading"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                      placeholder="Please enter heading.."
                    />
                  </div>
                </div>
                <div className="flex items-center my-5 justify-between space-x-10">
                  <div className="rounded-md w-1/2 ">
                    <label className=" mb-4 text-sm font-medium text-gray-700">
                      Twitter Link
                    </label>
                    <input
                      type="text"
                      name="heading"
                      id="heading"
                      value={twitterLink}
                      onChange={(e) => setTwitterLink(e.target.value)}
                      className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                      placeholder="Please enter heading.."
                    />
                  </div>
                  <div className="rounded-md w-1/2 ">
                    <label className=" mb-4 text-sm font-medium text-gray-700">
                      Facebook Link
                    </label>
                    <input
                      type="text"
                      name="heading"
                      id="heading"
                      value={fbLink}
                      onChange={(e) => setFbLink(e.target.value)}
                      className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                      placeholder="Please enter heading.."
                    />
                  </div>
                </div>
                <div className="rounded-md w-full ">
                  <label className=" mb-4 text-sm font-medium text-gray-700">
                    description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                    placeholder="Please enter description..."
                  />
                </div>
                <div className="flex justify-end mt-2 items-center">
                  <div className="  py-1 font-bold  ">
                    <button className="flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SuperstarDonarCreateScreen;
