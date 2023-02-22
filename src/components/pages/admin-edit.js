import React from "react";
const AdminEdit = () => {
  return (
    <>
      <main className="py-5 bg-[#F5F6F8]">
        <section className="block lg:flex m-10 justify-evenly">
          <section className="lg:ml-10 w-full lg:w-[44vw]">
            <div className="font-bold">Movie Description</div>
            <div className="rounded-xl my-5 bg-white p-10">
              <div className="lg:flex mb-4">
                <div className="mb-10 lg:mb-[0px] flex justify-center w-full border-[1px] rounded-xl ">
                  <div className="p-5 my-auto">
                    <img
                      src={require("../../assets/images/home/movieDetail.png")}
                    />
                  </div>
                </div>
                <div className="w-full lg:pl-5">
                  <div className="mb-4">
                    <span className=" block text-[16px] text-[#858D96] mb-3">
                      Movie Name
                    </span>
                    <input
                      className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                      id="email"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-4">
                    <span className=" block text-[16px] text-[#858D96] mb-3">
                      Category
                    </span>
                    <input
                      className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                      id="email"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="mb-4 mr-2">
                      <span className=" block text-[16px] text-[#858D96] mb-3">
                        Release Date
                      </span>
                      <input
                        className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                        id="email"
                        type="text"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-4">
                      <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                        Duration
                      </span>
                      <input
                        className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                        id="email"
                        type="text"
                        placeholder=""
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
                    id="email"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="mb-4 ml-4 w-full">
                  <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                    Casts
                  </span>
                  <input
                    className="h-[50px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    id="email"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="mb-4 w-full">
                <span className="ml-1 block text-[16px] text-[#858D96] mb-3">
                  Synopsis
                </span>
                <input
                  className="h-[120px] appearance-none border h-[65px] rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                  id="email"
                  type="text"
                  placeholder=""
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminEdit;
