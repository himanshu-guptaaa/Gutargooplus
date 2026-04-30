import { useEffect } from 'react';
import './Legal.css';

const Terms = () => {
  // Scrolls to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Terms and Conditions</h1>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          Welcome to Gutargoo+! By using our streaming platform, you agree to these Terms.
        </p>

        <h2>2. Service Description</h2>
        <p>
          Gutargoo+ is a free digital entertainment platform that provides access to movies, TV shows, documentaries, and other video content for online streaming. Users can enjoy unlimited viewing of the available content without any paid subscription or membership plans. The service is designed to provide easy and convenient entertainment access for all users at no cost. Content availability may vary over time depending on updates and platform improvements.
        </p>

        <h2>3. Account Registration and Security</h2>
        <p>You are responsible for maintaining your account safety.</p>
        <ul>
          <li>Keep your login credentials secure.</li>
          <li>Do not share your OTP.</li>
        </ul>

        <h2>4. Acceptable Use Policy</h2>
        <p>You agree not to misuse our service, including:</p>
        <ul>
          <li>Copying or distributing content illegally.</li>
          <li>Bypassing security measures.</li>
          <li>Uploading viruses or harmful software.</li>
        </ul>

        <h2>5. Content & Intellectual Property</h2>
        <p>All content is protected under copyright laws.</p>
        <ul>
          <li>Personal, non-commercial use only.</li>
          <li>No redistribution allowed.</li>
        </ul>

        <h2>6. Privacy Policy</h2>
        <p>
          Your privacy is important. Please review our Privacy Policy.
        </p>

        <h2>7. Service Availability</h2>
        <p>
          We cannot guarantee uninterrupted access or specific content availability.
        </p>

        <h2>8. Disclaimer & Limitation of Liability</h2>
        <p>
          Gutargoo+ is provided to users for entertainment purposes on an “as available” basis. We work hard to ensure the service runs smoothly and the content is presented accurately.
        </p>
        <p>
          The service may occasionally experience temporary interruptions due to maintenance, updates, or network issues. Content availability and information may change over time, and we encourage users to verify details when needed.
        </p>
        <p>
          To the maximum extent permitted by applicable law, Gutargoo+ is not responsible for any unexpected losses caused by technical disruptions beyond our control. Nothing in this section is intended to limit any consumer rights that cannot be excluded under applicable laws.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These terms are governed by the laws of India.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          For any questions, feedback, or support, feel free to reach out to us anytime at: <strong>support@gutargooplus.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Terms;