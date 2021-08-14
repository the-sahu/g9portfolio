import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const CustomLoader = () => {
  return (
    <Loader
      className="fixed block "
      style={{ top: "50%", left: "46%" }}
      type="ThreeDots"
      color="#8a0707"
      secondaryColor="#e2c1c1"
      height={100}
      width={100}
      timeout={10000} //10 secs
    />
  );
};

export default CustomLoader;
