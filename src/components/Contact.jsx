import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init('KT5iHk-v8QG_MCy4H'); // Initialize EmailJS with your User ID
  }, []);

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Handling email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  // Handling message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim() === '') {
      setMessageError('Message cannot be empty');
    } else {
      setMessageError('');
    }
  };

  // Handling form submission
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate both email and message before sending
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    }

    if (message.trim() === '') {
      setMessageError('Message cannot be empty');
    }

    // If both email and message are valid, send the email
    if (validateEmail(email) && message.trim() !== '') {
      emailjs
        .sendForm(
          'service_vh0fzqh', // Your EmailJS service ID
          'template_krbpr2f', // Your EmailJS template ID
          form.current,
          '3-bUc189PfqXNCSDT' // Your EmailJS public key (User ID)
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            setIsSubmitted(true);
            alert('Message sent successfully!');
          },
          (error) => {
            console.log('Email send error:', error.text);
            alert('Failed to send message. Please try again.');
          }
        );

      // Reset form fields after submission
      setEmail('');
      setMessage('');
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex animate__animated animate__slideInDown items-center justify-center min-h-screen bg-gray-900">
        <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="user_email" // EmailJS field name
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="message" // EmailJS field name
              id="message"
              value={message}
              onChange={handleMessageChange}
              rows="4"
              placeholder="Enter your message"
            ></textarea>
            {messageError && <p className="text-red-500 text-sm mt-2">{messageError}</p>}
          </div>

          <div className="flex justify-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="submit"
            >
              Submit
            </button>
          </div>

          {isSubmitted && (
            <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
