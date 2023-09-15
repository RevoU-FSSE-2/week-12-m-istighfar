/* eslint-disable react/prop-types */
import { Input, Button } from 'antd';

const AddressInfoStep = ({ formik, handleBackClick }) => {
    return (
        <div className='form-section'>
            <div className='form-field'>
                <label>Street Address:</label>
                <Input
                    name='streetAddress'
                    value={formik.values.streetAddress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.streetAddress && formik.errors.streetAddress && (
                    <div className='error'>{formik.errors.streetAddress}</div>
                )}
            </div>
            <div className='form-field'>
                <label>City:</label>
                <Input
                    name='city'
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.city && formik.errors.city && (
                    <div className='error'>{formik.errors.city}</div>
                )}
            </div>
            <div className='form-field'>
                <label>State:</label>
                <Input
                    name='state'
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.state && formik.errors.state && (
                    <div className='error'>{formik.errors.state}</div>
                )}
            </div>
            <div className='form-field'>
                <label>Zip Code:</label>
                <Input
                    name='zipCode'
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.zipCode && formik.errors.zipCode && (
                    <div className='error'>{formik.errors.zipCode}</div>
                )}
            </div>
            <div className='form-controls'>
                <Button type='default' onClick={handleBackClick} className='back-button'>
                    Back
                </Button>
                <Button type='primary' htmlType='submit' className='next-button'>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default AddressInfoStep;
