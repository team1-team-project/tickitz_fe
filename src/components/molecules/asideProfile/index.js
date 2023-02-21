/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AsideProfile = () => {
  const [images, setImages] = useState("");
  const [imagePrev, setImagePrev] = useState(null);

  const [dataProfileDetail, setDataProfileDetail] = useState([]);
  const id = useParams();
  console.log(dataProfileDetail, "ini dari useState");

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImagePrev(URL.createObjectURL(file));
    setImages(file);
  };

  useEffect(() => {
    axios
      .get(
        `https://tickitz.herokuapp.com/api/profile/ef8ef6a6-29a1-41e1-ad15-b975fd940fa9`
      )
      .then((res) => {
        console.log(res.data.data, "Ini dari axios");
        setDataProfileDetail(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="card bg-base-100 shadow-xl max-[375px]:w-[19rem] max-[465px]:w-[20rem] lg:w-[22rem] p-5">
        <div className="flex justify-between pb-4 pt-8">
          <h1>INFO</h1>
          <span>...</span>
        </div>
        <form>
          <figure className="p-10 flex-col gap-2">
            {imagePrev ? (
              imagePrev && (
                <img
                  src={imagePrev}
                  alt="Shoes"
                  className="rounded-full w-[10rem] h-[10rem]"
                />
              )
            ) : (
              <img
                src={require("../../../assets/images/christopher-campbell.jpg")}
                alt="Shoes"
                className="rounded-full w-[10rem] h-[10rem]"
              />
            )}
            <div className="flex justify-center">
              <div className="bg-primary p-2 rounded-md">
                <label htmlFor="imgs" className="text-white">
                  Edit
                </label>
              </div>
              <input
                id="imgs"
                type="file"
                className="hidden"
                onChange={(e) => {
                  onImageUpload(e);
                }}
                img={imagePrev}
              />
            </div>
            <h1 className="text-[1.2rem] font-bold">
              {dataProfileDetail.first_name}
            </h1>
            <p className="">Moviegoers</p>
          </figure>
          <div className="border-2 w-full"></div>
          <div className="card-body">
            <h5>Loyalty Points</h5>
            <div className="w-full bg-primary  rounded-xl p-5 mt-5">
              <div className="flex justify-between">
                <h3 className="text-white">Moviegoers</h3>
                <img
                  src={require("../../../assets/images/Star.png")}
                  className="w-8 h-8"
                ></img>
              </div>
              <div className="text-white pt-10 flex gap-3">
                <h5>500</h5>
                <span>Points</span>
              </div>
            </div>
            <div className="mt-5">
              <p>{dataProfileDetail.point} points became a master</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AsideProfile;
