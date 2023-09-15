/* eslint-disable react/prop-types */
import { Input, Button } from 'antd';

const AccountInfoStep = ({ formik, handleBackClick }) => {
    return (
        <div className='form-section'>
            <div className='form-field'>
                <label>Username:</label>
                <Input
                    name='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username && (
                    <div className='error'>{formik.errors.username}</div>
                )}
            </div>
            <div className='form-field'>
                <label>Password:</label>
                <Input.Password
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                    <div className='error'>{formik.errors.password}</div>
                )}
            </div>
            <div className='form-controls'>
                <Button type='default' onClick={handleBackClick} className='back-button'>
                    Back
                </Button>
                <Button type='primary' htmlType='submit' className='register-button'>
                    Register
                </Button>
            </div>
        </div>
    );
};

export default AccountInfoStep;
