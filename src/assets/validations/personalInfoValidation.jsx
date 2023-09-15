import * as yup from 'yup';

const personalInfoValidationSchema = yup.object().shape({
    fullName: yup.string().required('Full name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    dateOfBirth: yup
        .date()
        .required('Date of birth is required')
        .max(new Date(), 'Date of birth must be in the past'),
});

export default personalInfoValidationSchema;
