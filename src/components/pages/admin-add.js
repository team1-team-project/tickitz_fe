import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminAdd = () => {
  const navigate = useNavigate();
  const [fileImage, setFileImage] = useState("");
  const [Preview, setPreview] = useState("");
  const [addMovie, setAddMovie] = useState({
    id_category: "",
    movie_name: "",
    release_date: "",
    duration: "",
    director: "",
    actor: "",
    synopsis: "",
  });

  const loadImage = (image) => {
    const Image = image.target.files[0];
    setPreview(URL.createObjectURL(Image));
    setFileImage(Image);
  };

  const [validate, SetValidate] = useState({
    error: false,
    message: "",
  });

  const handleAddMovie = (event) => {
    const token = JSON.parse(localStorage.getItem("@login"));
    const login = token.token;

    event.preventDefault(); //prevent default mencegah sesuatu yang default
    const formData = new FormData(); //udah otomatis multipart
    formData.append("id_category", addMovie.id_category);
    formData.append("movie_name", addMovie.movie_name);
    formData.append("release_date", addMovie.release_date);
    formData.append("duration", addMovie.duration);
    formData.append("director", addMovie.director);
    formData.append("actor", addMovie.actor);
    formData.append("synopsis", addMovie.synopsis);
    formData.append("poster", fileImage);

    ///form data entries (for)
    ///looping from data

    axios({
      method: "POST",
      url: `https://tickitz.herokuapp.com/api/movie/`,
      data: formData, //postmant(form-data)
      headers: {
        //postman(header)
        "Content-typed": "multipart/form-data",
        token: login,
      },
    })
      .then((res) => {
        navigate("/");
        SetValidate();
        console.log(res.data);
      })
      .catch((err) => {
        SetValidate({ error: true, message: err.message });
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("@login")) {
      navigate("/");
    } else {
      if (JSON.parse(localStorage.getItem("@login")).role !== "admin") {
        navigate("/");
      }
    }
  }, []);

  return (
    <>
      <main className="py-5 bg-[#F5F6F8]">
        <form
          onSubmit={handleAddMovie}
          className="block lg:flex m-10 justify-evenly"
        >
          {validate.error && (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{validate.message}</span>
              </div>
            </div>
          )}
          <section className="lg:ml-10 w-full lg:w-[44vw]">
            <div className="font-bold">Movie Description</div>
            <div className="rounded-xl my-5 bg-white p-10">
              <div className="lg:flex mb-4">
                <div className="mb-10 lg:mb-[0px] flex justify-center w-full border-[1px] rounded-xl ">
                  <div className="p-5 my-auto">
                    {Preview ? (
                      <img src={Preview} alt="preview image" />
                    ) : (
                      <img
                        src={require("../../assets/images/home/movieDetail.png")}
                      />
                    )}

                    <label className="w-48 flex flex-col items-center  bg-primary text-white rounded-2xl  shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-[#7747fd] duration-200 hover:text-white">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Select a file
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={loadImage}
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full lg:pl-5">
                  <div className="mb-4">
                    <span className=" block text-[16px] text-[#858D96] mb-3">
                      Movie Name
                    </span>
                    <input
                      className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                      id="name"
                      type="text"
                      placeholder=""
                      onChange={(input) =>
                        setAddMovie({
                          ...addMovie,
                          movie_name: input.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <span className=" block text-[16px] text-[#858D96] mb-3">
                      Category
                    </span>
                    <input
                      className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                      id="category"
                      type="text"
                      placeholder=""
                      onChange={(input) =>
                        setAddMovie({
                          ...addMovie,
                          id_category: input.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="mb-4 mr-2">
                      <span className=" block text-[16px] text-[#858D96] mb-3">
                        Release Date
                      </span>
                      <input
                        className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                        id="release"
                        type="text"
                        placeholder=""
                        onChange={(input) =>
                          setAddMovie({
                            ...addMovie,
                            release_date: input.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-4">
                      <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                        Duration
                      </span>
                      <input
                        className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                        id="duration"
                        type="text"
                        placeholder=""
                        onChange={(input) =>
                          setAddMovie({
                            ...addMovie,
                            duration: input.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="mb-4 w-[65%]">
                  <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                    Director
                  </span>
                  <input
                    className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    id="director"
                    type="text"
                    placeholder=""
                    onChange={(input) =>
                      setAddMovie({
                        ...addMovie,
                        director: input.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4 ml-4 w-full">
                  <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                    Casts
                  </span>
                  <input
                    className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    id="cast"
                    type="text"
                    placeholder=""
                    onChange={(input) =>
                      setAddMovie({
                        ...addMovie,
                        actor: input.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-4 w-full">
                <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                  Synopsis
                </span>
                <input
                  className="h-[120px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                  id="synopsis"
                  type="text"
                  placeholder=""
                  onChange={(input) =>
                    setAddMovie({
                      ...addMovie,
                      synopsis: input.target.value,
                    })
                  }
                />
              </div>
            </div>
          </section>
          <div>
            <section className=" w-full mr-10 lg:w-[25vw] mb-10">
              <div className="font-bold">Premiere Location</div>
              <div className="rounded-xl my-5 bg-white">
                <div className="p-5">
                  <div className="w-full">
                    <div className="py-5 w-full">
                      <div>
                        <div className="p-3 rounded-lg">
                          <select className="rounded-lg p-3 select w-[50%] bg-[#EFF0F6]">
                            <option disabled selected>
                              Location
                            </option>
                            <option>Jakarta</option>
                            <option>Bogor</option>
                            <option>Depok</option>
                            <option>Tanggerang</option>
                          </select>
                        </div>
                      </div>
                      <div className="my-5 block items-center lg:flex">
                        <button className="m-2 mx-2 ">
                          <img
                            className=""
                            src={require("../../assets/images/home/ebv.png")}
                          />
                        </button>
                        <button className="m-2 mx-2 ">
                          <img
                            className=""
                            src={require("../../assets/images/home/cione.png")}
                          />
                        </button>
                        <button className="m-2 mx-2 ">
                          <img
                            className=""
                            src={require("../../assets/images/home/hiflix.png")}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full mr-10 lg:w-[25vw]">
              <div className="font-bold">Premiere Location</div>
              <div className="rounded-xl my-5 bg-white">
                <div className="p-5">
                  <div className="w-full">
                    <div className="py-5 w-full">
                      <div>
                        <div className="p-3 rounded-lg">
                          <select className="rounded-lg p-3 select w-[50%] bg-[#EFF0F6]">
                            <option disabled selected>
                              Set a Date
                            </option>
                            <option>Jakarta</option>
                            <option>Bogor</option>
                            <option>Depok</option>
                            <option>Tanggerang</option>
                          </select>
                        </div>
                      </div>
                      <div className="my-5 block items-center lg:flex">
                        <button className="mx-3 rounded h-[35px] w-[15%] border border-[#5F2EEA] text-[#5F2EEA]">
                          +
                        </button>
                      </div>
                      <div className="flex">
                        <button
                          className="m-3 border border-[1px] p-5 border-[#5F2EEA] text-[#5F2EEA] rounded-lg w-[120px] hover:text-white hover:bg-[#5F2EEA]"
                          type="submit"
                        >
                          Save Movie
                        </button>

                        <button className="m-3 border border-[1px] p-5 border-[#5F2EEA] text-[#5F2EEA] rounded-lg w-[120px] hover:text-white hover:bg-[#5F2EEA]">
                          cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </main>
    </>
  );
};

export default AdminAdd;
