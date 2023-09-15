import { useState } from 'react';
import { Card, Modal } from 'antd';
import './MultiStepRegist.css';
import {
    personalInfoValidationSchema,
    addressInfoValidationSchema,
    accountInfoValidationSchema,
} from '../../validations';
import { StepForm, StepMenu, StepContent, StepHeader } from '../../containers';

const validationSchemas = [
    personalInfoValidationSchema,
    addressInfoValidationSchema,
    accountInfoValidationSchema,
];

const initialValues = {
    fullName: '',
    email: '',
    dateOfBirth: null,
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    username: '',
    password: '',
};

const titles = ['Personal Information', 'Address Information', 'Account Information'];

const MultiStepRegist = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [validSteps, setValidSteps] = useState([true, false, false]);

    const formik = StepForm({
        currentStep,
        validationSchemas,
        initialValues,
        onSubmit: async (values) => {
            const errors = await formik.validateForm();

            if (Object.keys(errors).length === 0) {
                if (currentStep >= 2) {
                    console.log('Registration data:', values);
                    Modal.success({
                        title: 'Registration Successful',
                        content: 'Congratulations! You have successfully registered.',
                        onOk: handleModalOk,
                    });

                    return;
                }

                setCurrentStep((prevStep) => prevStep + 1);
                setValidSteps((prevValidSteps) => {
                    const newValidSteps = [...prevValidSteps];
                    newValidSteps[currentStep + 1] = true;
                    return newValidSteps;
                });
            }
        },
    });

    const handleBackClick = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleMenuClick = (step) => {
        if (validSteps[step]) {
            setCurrentStep(step);
        }
    };

    const handleModalOk = () => {
        formik.resetForm();
        setCurrentStep(0);
    };

    return (
        <div className='form-container'>
            <Card title={titles[currentStep]} className='card-with-sider'>
                <div className='form-content'>
                    <div className='sider'>
                        <StepMenu
                            titles={titles}
                            currentStep={currentStep}
                            validSteps={validSteps}
                            handleMenuClick={handleMenuClick}
                        />
                    </div>
                    <div className='content'>
                        <StepHeader titles={titles} currentStep={currentStep} />
                        <StepContent
                            currentStep={currentStep}
                            formik={formik}
                            handleBackClick={handleBackClick}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MultiStepRegist;
