import React from "react";
import { useFormik, Formik, Field } from "formik";
import { basicSchema } from "../Schema";
import { useState } from "react";

const Login = () => {
  const [view, setView] = useState(false);

  const onSubmit = async (values, action) => {
    console.log(values);
    console.log(action);
    await alert("success");
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      comfirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="grid items-end w-full h-36 border-2 border-customblack bg-customblack">
          <h1 className="bg-transparent text-customwhite text-5xl font-staat text-center cursor-default">
            Register Your Account
          </h1>
        </div>
      </div>

      <div className=" grid items-center bg-customblue">
        <form
          onSubmit={handleSubmit}
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
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              type="email"
              placeholder="Enter your Email"
              className={
                errors.email && touched.email
                  ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                  : "border-0 rounded-sm  w-80"
              }
            />
            {errors.email && touched.email && (
              <p className="bg-transparent text-customred p-1 text-lg">
                {errors.email}
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
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              type="text"
              placeholder="Enter your Name"
              className={
                errors.name && touched.name
                  ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                  : "border-0  rounded-sm w-80"
              }
            />
            {errors.name && touched.name && (
              <p className="bg-transparent text-customred text-lg">
                {errors.name}
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
              Password required to have an uppercase, a lowercase, a number and
              minimum 5 characters.
            </p>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              type="password"
              placeholder="Enter your Password"
              className={
                errors.password && touched.password
                  ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                  : "border-0 rounded-sm  w-80"
              }
            />
            {errors.password && touched.password && (
              <p className="bg-transparent text-customred text-lg">
                {errors.password}
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
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="confirmPassword"
              type="password"
              placeholder="Confirm your Password"
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "bg-red-400 shadow-sm-light rounded-sm shadow-customred border-0 w-80"
                  : "border-0  rounded-sm w-80"
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className=" bg-transparent text-customred text-lg">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-customblack drop-shadow-lg rounded-sm p-3 m-2 text-customwhite"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
