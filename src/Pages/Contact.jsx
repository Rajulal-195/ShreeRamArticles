import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (formData.phone && !/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be a valid 10-digit Indian number';
    }

    if (!formData.inquiry) {
      newErrors.inquiry = 'Please select an inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value : value,
    }));

    // Clear error for field being changed
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      navigate("/feedback")
      alert('Form submitted successfully!');
      // Optionally clear form or send to API
    }
  };

  return (
    <>

      <div className="bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-purple text-center  mb-8 text-3xl font-extrabold">
            Contact Us
          </h2>
          <h4 className='text-purple text-center text-lg mb-8 font-normal'>Let’s Shape Your Ideas Together — Contact Us Today</h4>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center">
            <form
            
              aria-label="Contact form"
              className="bg-[#fdf9f5] border border-gray-200 rounded-lg p-8 max-w-xl w-full shadow-md font-sans"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Get in Touch with Shree Ram Stone Crafts
              </h2>

              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className={`w-full px-4 py-2 text-sm border ${errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded focus:outline-none focus:ring-2 focus:ring-stone-500`}
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-2 text-sm border ${errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded focus:outline-none focus:ring-2 focus:ring-stone-500`}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91-XXXXXXXXXX"
                  className={`w-full px-4 py-2 text-sm border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                    } rounded focus:outline-none focus:ring-2 focus:ring-stone-500`}
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Inquiry Type */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  {[
                    ['general', 'General Inquiries'],
                    ['retail', 'Retail Orders'],
                    ['custom', 'Custom Orders'],
                    ['returns', 'Returns & Shipping'],
                  ].map(([value, label]) => (
                    <label key={value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="inquiry"
                        value={value}
                        checked={formData.inquiry === value}
                        onChange={handleChange}
                      />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.inquiry && <p className="text-red-600 text-sm mt-1">{errors.inquiry}</p>}
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements..."
                  className={`w-full px-4 py-2 text-sm border ${errors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded resize-none focus:outline-none focus:ring-2 focus:ring-stone-500`}
                ></textarea>
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit" onClick={handleSubmit}
                className="bg-stone-700 hover:bg-stone-800 text-white uppercase tracking-wide text-sm px-6 py-2 rounded transition"
              >
                Send Message
              </button>


            </form>

            <div className="max-w-lg w-full">


              <h2 className="text-2xl font-bold text-[#0a3a5d] mb-4">Our Location</h2>
              <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.587620554223!2d75.5305877744211!3d25.51879621860147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f054ddd263007%3A0x961960cfd5e5108b!2sShri%20ram%20Articles!5e0!3m2!1sen!2sin!4v1747513037811!5m2!1sen!2sin"
                  width="100%"
                  height="100%"

                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>


              <div className="flex items-center mt-5 text-[18px] text-gray-600">
                <i className="fas fa-phone-alt text-[#0a3a5d] mr-2 text-[21px]">
                </i>
                <a className="hover:underline" href="tel:+18013665900">
                  +91 8742025990, 9982146723
                </a>
              </div>
              <div className="flex items-center text-[18px] text-gray-600">
                <i className="fas fa-map-marker-alt text-[#0a3a5d] mr-2 text-[21px]">
                </i>

                Address:- Ashok Nagar ,Bada Naya Gaon bundi (Raj.) 323024

              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
