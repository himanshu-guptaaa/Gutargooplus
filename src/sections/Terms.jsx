import { useEffect } from 'react';
import './Legal.css';

const Privacy = () => {
  // Scrolls to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p style={{ color: '#df4119', fontWeight: '600', marginBottom: '30px' }}>
          Last updated: January 03, 2026
        </p>
        
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly, such as when you create an account or contact us. This includes name, email, and viewing preferences.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use your information to provide, maintain, and improve our services, send communications, and comply with legal obligations.
        </p>

        <h2>3. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal information. All data is encrypted during transmission and stored securely.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. We may share data with trusted service providers who assist us in operating our platform, under strict confidentiality agreements.
        </p>

        <h2>5. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your experience, remember preferences, and analyze how you use Gutargoo+.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information. Contact us at <strong>Support@Gutargooplus.com</strong> to exercise these rights.
        </p>

        <h2>7. iOS App Subscriptions and Payment</h2>
        <p>
          Gutargoo+ does not offer any paid Subscriptions or Purchases on iOS. All content available in the iOS version is free to access.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          For any questions, feedback, or support, feel free to reach out to us anytime at <strong>Support@Gutargooplus.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Privacy;