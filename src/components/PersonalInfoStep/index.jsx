/* eslint-disable react/prop-types */
import { Input, DatePicker, Button } from "antd";

const PersonalInfoStep = ({ formik }) => {
  return (
    <div className="form-section">
      <div className="form-field">
        <label>Full Name:</label>
        <Input
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your full name"
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div className="error">{formik.errors.fullName}</div>
        )}
      </div>
      <div className="form-field">
        <label>Email Address:</label>
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your email address"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}
      </div>
      <div className="form-field">
        <label>Date of Birth:</label>
        <DatePicker
          style={{ display: "flex" }}
          name="dateOfBirth"
          value={formik.values.dateOfBirth}
          onChange={(value) => formik.setFieldValue("dateOfBirth", value)}
          onBlur={formik.handleBlur}
        />
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
          <div className="error">{formik.errors.dateOfBirth}</div>
        )}
      </div>
      <Button type="primary" htmlType="submit" className="next-button">
        Next
      </Button>
    </div>
  );
};

export default PersonalInfoStep;
