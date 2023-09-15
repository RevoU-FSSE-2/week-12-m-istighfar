import * as yup from "yup";

const accountInfoValidationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export default accountInfoValidationSchema;
