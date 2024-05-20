import React from "react";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useUpdateUserMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  //if there is userInfo it means thats the user is logged in
  // if logged in we go (navigate) to the login screen using useEffect
  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.setName, userInfo.setEmail]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("password does not mutch");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data.message || err.error);
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen  ">
      <form
        onSubmit={submitHandler}
        className=" max-w-md  p-10 bg-slate-100 rounded-xl  flex flex-col shadow-lg"
      >
        <h2 className=" text-2xl font-bold text-center pb-3">Update Profile</h2>

        <label htmlFor="text" className="py-3">
          User name
        </label>
        <input
          type="name"
          placeholder="Enter your name"
          className="p-1 rounded-full py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email" className="py-3">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          className="p-1 rounded-full py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="py-3">
          Passsword
        </label>
        <input
          type="password"
          placeholder="Enter your name"
          className="p-1 rounded-full py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="text" className="py-3">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Enter your name"
          className="p-1 rounded-full  py-2"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="my-4 py-2 text-white bg-[#292929] hover:text-slate-300 rounded-full w-32 mx-auto">
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
