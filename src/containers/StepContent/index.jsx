/* eslint-disable react/prop-types */
// StepContent.js
import { PersonalInfoStep, AddressInfoStep, AccountInfoStep } from '../../components';

const StepContent = ({ currentStep, formik, handleBackClick }) => {
    return (
        <form onSubmit={formik.handleSubmit}>
            {currentStep === 0 && <PersonalInfoStep formik={formik} />}
            {currentStep === 1 && (
                <AddressInfoStep formik={formik} handleBackClick={handleBackClick} />
            )}
            {currentStep === 2 && (
                <AccountInfoStep formik={formik} handleBackClick={handleBackClick} />
            )}
        </form>
    );
};

export default StepContent;
