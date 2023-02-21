import { React, useState } from "react";
import AsideProfile from "../../molecules/asideProfile";
import EditProfile from "../../molecules/editProfile";
import OrderHistory from "../../molecules/orderHistory";

const Profile = () => {
  const [isToogle, setIsToogle] = useState(false);
  return (
    <>
      <section className="container flex flex-wrap gap-7">
        <section>
          <AsideProfile />
        </section>
        <section className="p-5">
          <section className="w-full flex gap-5 mb-10 p-5 drop-shadow-xl bg-white">
            <button
              className="hover:border-b-4 border-primary cursor-pointer
              focus:border-b-4"
              onClick={() => setIsToogle(true)}
            >
              Account Setting
            </button>
            <button
              className="hover:border-b-4 border-primary cursor-pointer focus:border-b-4"
              onClick={() => setIsToogle(false)}
            >
              Order History
            </button>
          </section>
          <div>{isToogle ? <EditProfile /> : <OrderHistory />}</div>
        </section>
      </section>
    </>
  );
};

export default Profile;
