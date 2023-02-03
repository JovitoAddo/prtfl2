import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = yup.object().shape({
    name: yup.string().required("Please Enter Your Name"),
    email: yup
      .string()
      .email("Please Enter a Valid Email")
      .required("Please Enter Your Email"),
    password: yup
      .string()
      .min(5)
      .matches(passwordRules, {
        message: "Password Did Not Matched Requirements",
      })
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Did Not Matched")
      .required("Please Re-enter Your Password"),
    loginEmail: yup.string().email("Please Enter a Valid Email"),
    loginPassword: yup.string(),
  });

  export default schema

