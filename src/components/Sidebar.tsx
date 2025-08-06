'use client';
import React, { useState } from 'react';

const ArvrJoinForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    collegeName: '',
    areaOfInterest: '',
    phoneNumber: ''
  });
  const [formErrors, setFormErrors] = useState<{
    firstName?: string;
    email?: string;
    collegeName?: string;
    areaOfInterest?: string;
    phoneNumber?: string;
  }>({});
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.collegeName.trim()) {
      errors.collegeName = 'College name is required';
    }
    
    if (!formData.areaOfInterest) {
      errors.areaOfInterest = 'Area of interest is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Google Sheets integration
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyVLb8jM6AgUb2R2YCbTNnV7vELhBn6pShgL_dH2PZHfK5PgGs8ZGEfJOm2KgA7l-5V/exec';
      
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('collegeName', formData.collegeName);
      formDataToSend.append('areaOfInterest', formData.areaOfInterest);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('timestamp', new Date().toISOString());
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (response.ok) {
        setSubmitMessage('Registration successful! We will contact you soon.');
        setFormData({
          firstName: '',
          email: '',
          collegeName: '',
          areaOfInterest: '',
          phoneNumber: ''
        });
        setFormErrors({});
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitMessage && (
        <div className={`arvr-submit-message ${submitMessage.includes('successful') ? 'success' : 'error'}`}>
          {submitMessage}
        </div>
      )}
      <form className="arvr-join-form" onSubmit={handleSubmit}>
                        <div className="arvr-form-group">                  
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter your first name"
                            className={`arvr-join-input ${formErrors.firstName ? 'error' : ''}`}
                            required
                          />
                          {formErrors.firstName && <span className="arvr-error-message">{formErrors.firstName}</span>}
                        </div>
                        
                        <div className="arvr-form-group">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            className={`arvr-join-input ${formErrors.email ? 'error' : ''}`}
                            required
                          />
                          {formErrors.email && <span className="arvr-error-message">{formErrors.email}</span>}
                        </div>
                        
                        <div className="arvr-form-group">
                          <input
                            type="text"
                            name="collegeName"
                            value={formData.collegeName}
                            onChange={handleInputChange}
                            placeholder="Enter your college name"
                            className={`arvr-join-input ${formErrors.collegeName ? 'error' : ''}`}
                            required
                          />
                          {formErrors.collegeName && <span className="arvr-error-message">{formErrors.collegeName}</span>}
                        </div>
                        
                        <div className="arvr-form-group">
                          <select 
                            name="areaOfInterest"
                            value={formData.areaOfInterest}
                            onChange={handleInputChange}
                            className={`arvr-join-input arvr-select ${formErrors.areaOfInterest ? 'error' : ''}`}
                            required
                          >
                            <option value="">Select your area of interest</option>
                            <option value="ar-development">AR Development</option>
                            <option value="vr-development">VR Development</option>
                            <option value="3d-modeling">3D Modeling</option>
                            <option value="game-development">Game Development</option>
                            <option value="ui-ux-design">UI/UX Design</option>
                            <option value="mobile-ar">Mobile AR</option>
                            <option value="enterprise-solutions">Enterprise Solutions</option>
                          </select>
                          {formErrors.areaOfInterest && <span className="arvr-error-message">{formErrors.areaOfInterest}</span>}
                        </div>
                        
                        <div className="arvr-form-group">                  
                          <div className="arvr-phone-group">
                            <span className="arvr-country-code">+91</span>
                            <input
                              type="tel"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              placeholder="XXXXXXXXXX"
                              className={`arvr-join-input arvr-phone-input ${formErrors.phoneNumber ? 'error' : ''}`}
                              pattern="[0-9]{10}"
                              maxLength={10}
                              required
                            />
                          </div>
                          {formErrors.phoneNumber && <span className="arvr-error-message">{formErrors.phoneNumber}</span>}
                        </div>
                        
                        <button 
                          type="submit" 
                          className="arvr-form-submit-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Start Learning'}
                        </button>
                      </form>
    </div>
  );
} 

export default ArvrJoinForm;
