"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import emailjs from '@emailjs/browser';

interface IContactModal {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<IContactModal> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateMessage = (text: string) => {
    if (text.length < 5) return 'Message must be at least 5 characters long';
    if (text.length > 1000) return 'Message must be less than 1000 characters';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateMessage(message);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_KEY || 'y4EbiqRXEN1JI1CJk');

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_chantolgy_feedbk', // You'll need to replace this with your EmailJS service ID
        'template_n5ku2cw', // You'll need to replace this with your EmailJS template ID
        {
          message: message,
          from_name: 'Website Contact Form',
          to_name: 'Chantolgy Team',
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY || 'y4EbiqRXEN1JI1CJk'
      );

      console.log('Email sent successfully:', result);
      setIsSuccess(true);
      setMessage('');
      
      // Auto close after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setMessage('');
    setError('');
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          {/* Header */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2 font-baloo">
            Get in touch
          </h2>
          <p className="text-gray-600 mb-6 font-baloo">
            Your contact details and we&apos;ll get back to you shortly.
          </p>

          {/* Success Message */}
          {isSuccess && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Message Input */}
            <div className="mb-4">
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setError('');
                }}
                placeholder="Input your message here"
                className={clsx(
                  "w-full p-3 border rounded-lg resize-none font-baloo",
                  "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                  error ? "border-red-500" : "border-gray-300"
                )}
                rows={5}
                maxLength={1000}
              />
              
              {/* Character Count */}
              <div className="flex justify-between items-center mt-2 text-sm">
                <span className={clsx(
                  "font-baloo",
                  message.length < 5 ? "text-red-500" : "text-gray-500"
                )}>
                  {message.length < 5 ? `${5 - message.length} more characters needed` : ""}
                </span>
                <span className={clsx(
                  "font-baloo",
                  message.length > 950 ? "text-orange-500" : "text-gray-500"
                )}>
                  {message.length}/1000
                </span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded font-baloo">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || message.length < 5 || message.length > 1000}
              className={clsx(
                "w-full py-3 px-4 rounded-lg font-semibold font-baloo transition-all duration-300",
                isLoading || message.length < 5 || message.length > 1000
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-[1.02]"
              )}
            >
              {isLoading ? "Sending..." : "Get in touch"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

