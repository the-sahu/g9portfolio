import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import CustomLoader from "../components/CustomLoader";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { listNews, deleteNews, createNews } from "../actions/newsActions";
import { NEWS_CREATE_RESET } from "../constants/newsConstants";
const NewsScreen = ({ history, match }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const newsList = useSelector((state) => state.newsList);
  const { loading, error, news } = newsList;
  console.log(news);

  const newsDelete = useSelector((state) => state.newsDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = newsDelete;

  const newsCreate = useSelector((state) => state.newsCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    news: createdNews,
  } = newsCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: NEWS_CREATE_RESET });

    if (!userInfo) {
      history.push("/mbdd_admin");
    }

    if (successCreate) {
    } else {
      setImage("");
      setName("");
      dispatch(listNews());
    }
  }, [history, successDelete, successCreate, createdNews, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteNews(id));
    }
  };

  const createNewsHandler = () => {
    dispatch(createNews());
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
      image,
    });

    dispatch(
      createNews({
        name,
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
              News
            </h1>
            <div className="h-px max-w-md my-2 bg-primary-300 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto px-8 bg-white shadow py-16">
            <div className="flex items-center justify-start space-x-10">
              <form onSubmit={submitHandler} className="w-1/3">
                <label className=" text-sm font-medium  text-gray-700">
                  Cover photo
                </label>
                <div className="flex justify-center items-center  px-6 pt-5 pb-6 border-2 bg-white h-64 border-gray-300 border-dashed rounded-md">
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
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                </div>
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
                    className="appearance-none relative  w-full px-3 py-3 border border-primary-300 placeholder-primary-400 text-primary-900 rounded-md focus:outline-none focus:ring-2 transition duration-200 focus:ring-offset-2 focus:ring-primary-500  focus:z-10 sm:text-base"
                    placeholder="Please enter name.."
                  />
                </div>
                <div className="flex justify-start mt-2 items-center">
                  <div className="  py-1 font-bold  ">
                    <button className="flex items-center px-4 py-2 text-md font-medium leading-6 text-center text-white text-sm transition bg-primary-500 rounded shadow  hover:shadow-md focus:outline-none">
                      Save
                    </button>
                  </div>
                </div>
              </form>
              {image && (
                <div className="w-1/2">
                  <img
                    src={image}
                    className="h-auto w-full object-cover object-center"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-wrap mt-5 -m-4">
              {/* single blog card begins */}
              {news &&
                news.map((news) => (
                  <div key={news._id} className="p-4 md:w-1/3 w-full">
                    <div className="h-full bg-white  hover:shadow-md space-y-5 shadow border border-gray-100 p-5 rounded">
                      <img
                        src={news.image}
                        className="h-20 object-center object-contain w-full"
                        alt={news.name}
                      />
                      <div className="inline-flex items-center">
                        <span className="text-base font-bold  text-primary-500">
                          {news.name}
                        </span>
                      </div>

                      <button
                        onClick={() => deleteHandler(news._id)}
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
                    </div>
                  </div>
                ))}

              {/* single blog card ends */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsScreen;
