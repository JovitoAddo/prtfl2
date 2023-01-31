import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [view, setView] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email("Please Enter a Valid Email").required("Please Enter Your Email"),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="grid items-end w-full h-36 border-2 border-customblack bg-customblack">
          <h1 className="bg-transparent text-customwhite text-5xl font-staat text-center cursor-default">
            {view === false ? "Register Your Account" : "Login Here"}
          </h1>
        </div>
      </div>

      <div className="bg-customblue w-full flex justify-center p-4">
        <button
          onClick={() => {
            setView(!view);
          }}
          className="border-2 m-2 p-3 bg-customred prose text-xl text-customblack border-customblack shadow-md transition active:translate-y-2"
        >
          {view === false ? "Go to Login" : "Go to Register"}
        </button>
      </div>

      {/* REGISTER PAGE */}
      <div className={view === true ? "hidden" : "bg-customred"}>
        <div className=" grid items-center bg-customblue">
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
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
                placeholder="Enter your Email"
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
                placeholder="Enter your Name"
                type="text"
                {...register("name")}
                // className={
                //   errors.name && touched.name
                //     ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                //     : "border-0  rounded-sm w-80"
                // }
              />
              {/* {errors.name && touched.name && (
                <p className="bg-transparent text-customred text-lg">
                  {errors.name}
                </p>
              )} */}
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
                placeholder="Enter your Password"
                type="text"
                {...register("password")}
                // className={
                //   errors.password && touched.password
                //     ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                //     : "border-0 rounded-sm  w-80"
                // }
              />
              {/* {errors.password && touched.password && (
                <p className="bg-transparent text-customred text-lg">
                  {errors.password}
                </p>
              )} */}
            </div>
            <div className="grid justify-items-center bg-transparent p-3">
              <label
                htmlFor="confirmPassword"
                className="bg-transparent  text-customwhite p-1 text-xl"
              >
                Confirm Password
              </label>
              <input
                placeholder="Confirm your Password"
                type="text"
                {...register("confirmPassword")}
                // className={
                //   errors.confirmPassword && touched.confirmPassword
                //     ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                //     : "border-0  rounded-sm w-80"
                // }
              />
              {/* {errors.confirmPassword && touched.confirmPassword && (
                <p className=" bg-transparent text-customred text-lg">
                  {errors.confirmPassword}
                </p>
              )} */}
            </div>
            <button
              type="submit"
              className="bg-customblack drop-shadow-lg rounded-sm p-3 m-2 text-customwhite"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* LOGIN PAGE */}
      <div className={view === false ? "hidden" : "bg-customblue"}>
        <h1>text</h1>
      </div>
    </div>
  );
};

export default Login;
