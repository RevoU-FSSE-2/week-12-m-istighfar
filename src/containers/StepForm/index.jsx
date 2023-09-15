// StepForm.js
import { useFormik } from 'formik';

const StepForm = ({ currentStep, validationSchemas, initialValues, onSubmit }) => {
    return useFormik({
        initialValues,
        validationSchema: validationSchemas[currentStep],
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit,
    });
};

export default StepForm;
