import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please Enter a Valid Email").required("Required"),
  name: yup.string().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Password need an uppercase, a lowercase, a number and minimum 5 characters" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});
