import React from "react";
import schema from "../Schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const Navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitLogin = () => {
    console.log("something should happen")
    alert("Login")
    Navigate("/register")

    
  };
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="grid items-end w-full h-36 border-2 border-customblack bg-customblack">
          <h1 className="bg-transparent text-customwhite text-5xl font-staat text-center cursor-default">
            Login Here
          </h1>
        </div>
      </div>

      <div className="bg-customblue w-full flex justify-center p-4">
        <Link to="/register" className="bg-transparent">
          <button
            onClick={() => {}}
            className="border-2 m-2 p-3 bg-customred bg-opacity-70 prose text-xl text-customblack border-customblack shadow-md transition active:translate-y-2"
          >
            Go To Register
          </button>
        </Link>
      </div>

      <div className="bg-customblue h-screen">
        <form
          onSubmit={handleSubmit(onSubmitLogin)}
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
              {...register("loginEmail")}
              className={
                errors.loginEmail
                  ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                  : "border-0 rounded-sm w-80"
              }
            />
            {errors.loginEmail && (
              <p className="bg-transparent text-customred p-1 text-lg">
                {errors.loginEmail.message}
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
            {/* <p className="bg-transparent text-customwhite border-2 border-customred m-2 prose text-center w-80">
                Password required to have an uppercase, a lowercase, a number
                and minimum 5 characters.
              </p> */}
            <input
              placeholder="Enter Your Password"
              type="password"
              {...register("loginPassword")}
              className={
                errors.loginPassword
                  ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                  : "border-0 rounded-sm  w-80"
              }
            />
            {errors.loginPassword && (
              <p className="bg-transparent text-customred text-lg">
                {errors.loginPassword.message}
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
  );
};

export default Login;
