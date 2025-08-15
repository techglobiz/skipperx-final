// Example of how to use ArvrJoinForm with different form names on different pages

import ArvrJoinForm from './Sidebar';

// Example 1: AR Development Page
export const ARDevelopmentPage = () => {
  return (
    <div>
      <h1>AR Development Course</h1>
      <ArvrJoinForm formName="AR Development Registration" />
    </div>
  );
};

// Example 2: VR Development Page
export const VRDevelopmentPage = () => {
  return (
    <div>
      <h1>VR Development Course</h1>
      <ArvrJoinForm formName="VR Development Registration" />
    </div>
  );
};

// Example 3: 3D Modeling Page
export const ModelingPage = () => {
  return (
    <div>
      <h1>3D Modeling Workshop</h1>
      <ArvrJoinForm formName="3D Modeling Workshop Registration" />
    </div>
  );
};

// Example 4: General Contact Page (no pre-filled form name)
export const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ArvrJoinForm />
    </div>
  );
};

// Example 5: Using with dynamic form names based on URL or state
export const DynamicFormPage = ({ courseType }: { courseType: string }) => {
  const getFormName = (type: string) => {
    switch (type) {
      case 'ar': return 'AR Development Course Registration';
      case 'vr': return 'VR Development Course Registration';
      case 'modeling': return '3D Modeling Course Registration';
      case 'game': return 'Game Development Course Registration';
      case 'ui-ux': return 'UI/UX Design Course Registration';
      default: return 'General Course Registration';
    }
  };

  return (
    <div>
      <h1>Course Registration</h1>
      <ArvrJoinForm formName={getFormName(courseType)} />
    </div>
  );
};
