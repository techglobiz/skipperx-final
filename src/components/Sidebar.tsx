'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface ArvrJoinFormProps {
  formName?: string;
}

const ArvrJoinForm = ({ formName = '' }: ArvrJoinFormProps) => {
  const pathname = usePathname();
  
  const getFormNameFromUrl = (path: string) => {
    const formNameMap: Record<string, string> = {
      '/drone-engineering': 'Drone Engineering Course Registration',
      '/robot-engineering': 'Robot Engineering Course Registration',
      '/ar-vr': 'AR VR Development Course Registration',
      '/startup-stack': 'Startup Stack Course Registration',
      '/core-tech': 'Core Tech Course Registration',
      '/creators-hub': 'Creators Hub Course Registration',
      '/contact': 'General Contact Form',
      '/about': 'About Us Inquiry Form',
      '/courses': 'Course Inquiry Form'
    };
    
    return formNameMap[path] || 'General Registration Form';
  };

  const getEffectiveFormName = useCallback(() => {
    if (formName) return formName; // Use prop if provided
    return getFormNameFromUrl(pathname); // Otherwise use URL-based detection
  }, [formName, pathname]);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    collegeName: '',
    areaOfInterest: '',
    phoneNumber: '',
    formName: getEffectiveFormName()
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

  // Update formName when prop changes or URL changes
  useEffect(() => {
    const newFormName = getEffectiveFormName();
    console.log('Current pathname:', pathname);
    console.log('Prop formName:', formName);
    console.log('Effective form name:', newFormName);
    setFormData(prev => ({
      ...prev,
      formName: newFormName
    }));
  }, [formName, pathname, getEffectiveFormName]);

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
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyk1LWW9RMXuExhh-vTac4DGRLtttdCYxbUG6-TKP2W0iB51mHlDxew3yx-oOCIvcCQ/exec';
      
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('collegeName', formData.collegeName);
      formDataToSend.append('areaOfInterest', formData.areaOfInterest);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('FormName', formData.formName); // Changed to match Google Sheets column name
      formDataToSend.append('timestamp', new Date().toISOString());
      
      // Debug: Log the form data being sent
      console.log('Form data being sent:');
      console.log('FormName:', formData.formName);
      console.log('pathname:', pathname);
      for (const pair of formDataToSend.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
      
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
          phoneNumber: '',
          formName: getEffectiveFormName()
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
                        {/* Hidden field for formName */}
                        <input
                          type="hidden"
                          name="formName"
                          value={formData.formName}
                        />
                        
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
