import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import schema from "../Schema";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Navigate = useNavigate()

  const onSubmitRegister = (formValue) => {
    console.log(formValue);
    // localStorage.setItem("userData", JSON.stringify(formValue));
    alert("Register Completed");
    Navigate("/login")
  };

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="grid items-end w-full h-36 border-2 border-customblack bg-customblack">
          <h1 className="bg-transparent text-customwhite text-5xl font-staat text-center cursor-default">
            Register Your Account
          </h1>
        </div>
      </div>

      <div className="bg-customblue w-full flex justify-center p-4">
        <Link to="/login" className="bg-transparent">
        <button
          className="border-2 m-2 p-3 bg-customred bg-opacity-70 prose text-xl text-customblack border-customblack shadow-md transition active:translate-y-2"
        >
          Go To Login
        </button></Link>
      </div>

      {/* REGISTER PAGE */}
      <div className="">
        <div className=" bg-customblue h-screen">
          <form
            onSubmit={handleSubmit(onSubmitRegister)}
            className=" grid justify-items-center bg-transparent"
          >
            <div className="grid justify-items-center bg-transparent p-3">
              <label
                htmlFor="email"
                className="bg-transparent text-customwhite p-1 text-xl"
              >
                Email
              </label>
              <input
                placeholder="Enter Your Email"
                type="email"
                {...register("email")}
                className={
                  errors.email
                    ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                    : "border-0 rounded-sm w-80"
                }
              />
              {errors.email && (
                <p className="bg-transparent text-customred p-1 text-lg">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="grid justify-items-center bg-transparent p-3">
              <label
                htmlFor="name"
                className="bg-transparent text-customwhite text-xl p-1"
              >
                Name
              </label>
              <input
                placeholder="Enter Your Name"
                type="text"
                {...register("name")}
                className={
                  errors.name
                    ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                    : "border-0  rounded-sm w-80"
                }
              />
              {errors.name && (
                <p className="bg-transparent text-customred text-lg">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid justify-items-center bg-transparent p-3">
              <label
                htmlFor="password"
                className="bg-transparent text-customwhite p-1 text-xl"
              >
                Password
              </label>
              <p className="bg-transparent text-customwhite border-2 border-customred m-2 prose text-center w-80">
                Password required to have an uppercase, a lowercase, a number
                and minimum 5 characters.
              </p>
              <input
                placeholder="Enter Your Password"
                type="password"
                {...register("password")}
                className={
                  errors.password
                    ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                    : "border-0 rounded-sm  w-80"
                }
              />
              {errors.password && (
                <p className="bg-transparent text-customred text-lg">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="grid justify-items-center bg-transparent p-3">
              <label
                htmlFor="confirmPassword"
                className="bg-transparent  text-customwhite p-1 text-xl"
              >
                Confirm Password
              </label>
              <input
                placeholder="Confirm Your Password"
                type="password"
                {...register("confirmPassword")}
                className={
                  errors.confirmPassword
                    ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                    : "border-0  rounded-sm w-80"
                }
              />
              {errors.confirmPassword && (
                <p className=" bg-transparent text-customred text-lg">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-customblack drop-shadow-lg border-b-2 border-customwhite rounded-sm p-3 m-2 text-customwhite"
            >
              Submit
            </button>

          </form>
        </div>
      </div>

      {/* LOGIN PAGE */}
      
    </div>
  );
};

export default Register;
