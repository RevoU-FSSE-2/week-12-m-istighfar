import * as yup from "yup";

const addressInfoValidationSchema = yup.object({
  streetAddress: yup.string().required("Street address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup
    .string()
    .matches(/^\d{5}/, "Invalid zip code format")
    .required("Zip code is required"),
});

export default addressInfoValidationSchema;
