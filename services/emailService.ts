import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../constants';

interface EmailData {
  name: string;
  company: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

export const sendEmail = async (formData: EmailData): Promise<void> => {
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

  // Check if keys are still placeholders
  if (SERVICE_ID === 'YOUR_SERVICE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('EmailJS keys are missing in constants.tsx. Simulating success for demo.');
    await new Promise(resolve => setTimeout(resolve, 2000));
    return;
  }

  try {
    // These keys (name, email, etc.) must match the {{variables}} in your EmailJS Template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      type: formData.type,
      message: formData.message,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error(`EmailJS failed: ${response.text}`);
    }
  } catch (error) {
    console.error('Email Sending Error:', error);
    throw error;
  }
};