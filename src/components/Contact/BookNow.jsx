import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TEInput, TERipple } from "tw-elements-react";
import { TETextarea } from "tw-elements-react";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    disease: '', // Added state for the "disease" field
    dateTime: ''
  });
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      emailjs.sendForm('service_f43v5sr', 'template_6eon2o9', formRef.current, '9KmNbXAlWq3sGn_88')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          toast.success('Message sent successfully!');
          // Reset form fields after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            disease: '',
            dateTime: ''
          });
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    } else {
      toast.error('Please fill out all required fields.');
    }
  };

  return (
    <div className=''>
      <div className="mt-[22vh] bg-[#f57c00] h-[12vh] px-[20vh] text-white font-bold text-5xl opacity-80 p-5 ">
    Book Now
     </div>
    <div className=' shadow-xl w-[70%] mx-auto mb-10 mt-[5vh]  '>

    <div className='container mx-auto px-5 lg:px-10 py-10'>
      <div className='max-w-2xl mx-auto'>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
            <select id="service" name="service" className=" border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleChange}>
              <option value="" disabled selected className='text-gray-400'>Choose a Service</option>
              <option value="Swaknee Module">Swaknee Module</option>
              <option value="Electromagnetics/Knee Brace">Electromagnetics/Knee Brace</option>
              <option value="Educational Resources & Training">Educational Resources & Training</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor="dateTime" className="block mb-2 text-sm font-medium text-gray-900 ">Select Date and Time</label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
          </div>
          <div className='mb-4'>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
            <TEInput
              type="text"
              name='name'
              id="name"
              value={formData.name}
              onChange={handleChange}
              className='border border-gray-300 p-2.5 rounded-lg w-full'
              />
          </div>
          <div className='mb-4'>
            <label htmlFor="disease" className="block mb-2 text-sm font-medium text-gray-900 ">Pre Diseases</label>
            <TEInput
              type="text"
              name='disease'
              id="disease"
              value={formData.disease}
              onChange={handleChange}
              className='border border-gray-300 p-2.5 rounded-lg w-full'
              />
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
            <TEInput
              type="email"
              id="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='border border-gray-300 p-2.5 rounded-lg w-full'
              />
          </div>
          <div className='mb-4'>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
            <TEInput
              type="tel"
              id="phone"
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='border border-gray-300 p-2.5 rounded-lg w-full'
              />
          </div>
          <div className='mb-4'>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Write Your message here</label>
            <TETextarea
              id="message"
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className='border border-gray-300 p-2.5 rounded-lg w-full resize-none'
              />
          </div>
       
          <div className="flex justify-center w-full">
            <TERipple rippleColor="light">
              <button className='hover:bg-[#212ea0] bg-[#00897b] px-8 py-3 rounded-full text-white' type='submit'>
                Book Now
              </button>
            </TERipple>
          </div>
        </form>
      </div>
      <ToastContainer position='bottom-right' autoClose={3000} />
    </div>
              </div>
              </div>
  );
};

export default BookNow;
