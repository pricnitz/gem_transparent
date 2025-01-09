import React, { useState } from 'react';
import close from '../assets/close.png'
import '../css/App.css'

const UserDetailsForm = ({ hideModalForm }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    designation: '',
    companyName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    countryCode: '',
    phoneNo: '',
    mobileNo: '',
    email: '',
    website: '',
    businessType: '',
    userName: '',
    password: '',
    retypePassword: '',
    captcha: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      agreeTerms: e.target.checked,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.designation) newErrors.designation = 'Designation is required';
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.retypePassword)
      newErrors.retypePassword = 'Passwords must match';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    if (!formData.captcha) newErrors.captcha = 'Captcha is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, submit the data (you can handle form submission here)
      console.log(formData);
      // Close modal after form submission
      hideModalForm();
    }
  };

  return (
    <div className="modal-content">
      <h2>User Details Form</h2>
      <form onSubmit={handleSubmit} className='modal-content-form'>
       <dir>
       <label>
          First Name:*
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </label>
       </dir>

        <div>
        <label>
          Last Name:*
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </label>
        </div>

        <div>
        <label>
          Designation:*
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
          />
          {errors.designation && <p>{errors.designation}</p>}
        </label>
        </div>

     <div>
     <label>
          Company Name:*
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
          {errors.companyName && <p>{errors.companyName}</p>}
        </label>
     </div>
<div>
        <label>
          Address:*
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          {errors.address && <p>{errors.address}</p>}
        </label></div>

       <div>
       <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
       </div>

       <div>
       <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
       </div>

       <div>
       <label>
          Postal/Zip Code:
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
        </label>

       </div>
       
       <div>
       <label>
          Country Code:
          <input
            type="text"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleInputChange}
          />
        </label>
       </div>

       <div>
       <label>
          Phone No:
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleInputChange}
          />
        </label>
       </div>

      <div>
      <label>
          Mobile No:
          <input
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleInputChange}
          />
        </label>
      </div>

    <div>
      
    <label>
          Email:*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </label>
    </div>

       <div>
       <label>
          Website:
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          />
        </label>
       </div>
     

       <div>
       <label>
          Business Type:*
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            required
          >
            <option value="">Please Select...</option>
            <option value="B2B">B2B</option>
            <option value="B2C">B2C</option>
          </select>
          {errors.businessType && <p>{errors.businessType}</p>}
        </label>
       </div>
<div className='modal_content_profilie_section'>
  
<div > 
        <label>
          User Name:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
          />
        </label>
        </div>

   <div>
   <label>
          Password:*
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </label>
   </div>

      <div>
      <label>
          Retype Password:*
          <input
            type="password"
            name="retypePassword"
            value={formData.retypePassword}
            onChange={handleInputChange}
            required
          />
          {errors.retypePassword && <p>{errors.retypePassword}</p>}
        </label>
      </div>

       <div>
       <label>
          CAPTCHA:
          <input
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleInputChange}
            required
          />
          {errors.captcha && <p>{errors.captcha}</p>}
        </label>
       </div>
</div>

       <div className="checkbox">
       <label>
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleCheckboxChange}
          />
          
          {errors.agreeTerms && <p>{errors.agreeTerms}</p>}
        </label>
        I agree to the terms & conditions of Transparent Gems Pvt. Ltd.
       </div>

        <button type="submit">Submit</button>
      </form>
      <button className="close-modal-btn" onClick={hideModalForm}> <img src={close} alt="close" /> </button>
    </div>
  );
};

export default UserDetailsForm;
