import { useState } from 'react';
import { Card, Menu, Steps, Modal } from 'antd';
import { useFormik } from 'formik';
import './MultiStepRegist.css';
import { AccountInfoStep, AddressInfoStep, PersonalInfoStep } from '../../components';
import {
    addressInfoValidationSchema,
    personalInfoValidationSchema,
    accountInfoValidationSchema,
} from '../../assets/validations';

const { Step } = Steps;

const validationSchemas = [
    personalInfoValidationSchema,
    addressInfoValidationSchema,
    accountInfoValidationSchema,
];

const MultiStepRegist = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [validSteps, setValidSteps] = useState([true, false, false]);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            dateOfBirth: null,
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            username: '',
            password: '',
        },
        validationSchema: validationSchemas[currentStep],
        validateOnChange: true,
        validateOnBlur: true,
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

    const titles = ['Personal Information', 'Address Information', 'Account Information'];

    return (
        <div className='form-container'>
            <Card title={titles[currentStep]} className='card-with-sider'>
                <div className='form-content'>
                    <div className='sider'>
                        <Menu mode='vertical' selectedKeys={[`${currentStep}`]} className='menu'>
                            {titles.map((title, index) => (
                                <Menu.Item
                                    key={index}
                                    onClick={() => handleMenuClick(index)}
                                    disabled={!validSteps[index]}
                                    className='menu-item'
                                >
                                    {title}
                                </Menu.Item>
                            ))}
                        </Menu>
                    </div>
                    <div className='content'>
                        <Steps current={currentStep} className='steps' direction='horizontal'>
                            {titles.map((title, index) => (
                                <Step key={index} title={title} />
                            ))}
                        </Steps>
                        <form onSubmit={formik.handleSubmit}>
                            {currentStep === 0 && <PersonalInfoStep formik={formik} />}
                            {currentStep === 1 && (
                                <AddressInfoStep
                                    formik={formik}
                                    handleBackClick={handleBackClick}
                                />
                            )}
                            {currentStep === 2 && (
                                <AccountInfoStep
                                    formik={formik}
                                    handleBackClick={handleBackClick}
                                />
                            )}
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MultiStepRegist;
