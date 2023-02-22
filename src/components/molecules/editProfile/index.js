/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const login = JSON.parse(localStorage.getItem("@login"));
  const id = login.data.user.id_profile;
  // console.log(id, "ini dari editProfile");
  const { image } = useSelector((state) => state.profileIdUser);
  const [editFormProfile, setEditFormProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const [editPassword, setEditPassword] = useState({
    password: "",
    cnfrmPassword: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(image);
    if (editPassword.password !== editPassword.cnfrmPassword) {
      alert("password tidak sama");
    } else {
      const editProfile = new FormData(e.target);
      editProfile.append("email", editFormProfile.email);
      editProfile.append("first_name", editFormProfile.first_name);
      editProfile.append("last_name", editFormProfile.last_name);
      editProfile.append("phone", editFormProfile.phone);
      editProfile.append("images", image);

      axios({
        method: "PATCH",
        url: `https://tickitz.herokuapp.com/api/profile/editprofile/${id}`,
        headers: {
          "content-type": "multipart/form-data",
        },
        data: editProfile,
      })
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <>
      {/* Data Diri */}
      <form onSubmit={onSubmit}>
        <section className="w-[40rem] shadow-xl p-7">
          <h1 className="text-xl font-bold pb-1">Details information</h1>
          <div className="border-b-4 mt-2 mb-[3rem] w-full"></div>
          {/* Input Name */}
          <div className="flex flex-row gap-5 form-control w-full">
            <div className="w-[50%]">
              <label className="label">
                <span className="label-text">First Name :</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setEditFormProfile({
                    ...editFormProfile,
                    first_name: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-[50%]">
              <label className="label">
                <span className="label-text">Last Name :</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setEditFormProfile({
                    ...editFormProfile,
                    last_name: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-row gap-5 form-control w-full">
            <div className="w-[50%]">
              <label className="label">
                <span className="label-text">Email :</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setEditFormProfile({
                    ...editFormProfile,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-[50%]">
              <label className="label">
                <span className="label-text">Phone Number :</span>
              </label>
              <input
                id="phone"
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setEditFormProfile({
                    ...editFormProfile,
                    phone: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </section>
        {/* Skill */}
        <section className="flex-12 mt-8 p-7 shadow-xl">
          <h1 className="text-xl font-bold ">Account and Privacy</h1>
          <div className="border-b-4 mt-2 mb-[3rem] w-full"></div>
          <div className="flex flex-row gap-5 form-control w-full">
            <div className="w-[50%]">
              <label className="label">
                <span className="label-text">New Password :</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setEditPassword({
                    ...editPassword,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-[50%]">
              <label className="label">
                <span className="label-text">Confirm Password :</span>
              </label>
              <input
                id="phone"
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setEditPassword({
                    ...editPassword,
                    cnfrmPassword: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </section>
        <button type="submit" className="btn btn-primary mt-8 w-[50%]">
          Update Changes
        </button>
      </form>
    </>
  );
};

export default EditProfile;
