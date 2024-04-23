import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TEInput, TERipple } from "tw-elements-react";
import { TETextarea } from "tw-elements-react";
import { Link } from 'react-router-dom';
import careerimg from "../../assets/aboutus/careerimg.png"
const Jobapply = () => {
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
    <div className='flex flex-cols-2'>
    <div className='container  px-5  '>
      <div className='max-w-2xl ml-[20vh]'>
        <form ref={formRef} onSubmit={handleSubmit}>
        <div className='mb-4'>Your name</div>
            <TEInput
                type="text"
                name='name'
                id="exampleFormControlInput1"
                label="Full Name"
                value={formData.name}
                onChange={handleChange} 
          ></TEInput>
        
        <div className='mt-4 mb-2'>Your Email</div>
           
           <TEInput
     type="email"
     id="exampleFormControlInputEmail"
     label="Email input"
     name='email'
     value={formData.email}
     onChange={handleChange}
   ></TEInput>
     
          
     <div className='mt-4 mb-2'>Phone Number</div>
            <TEInput
      type="tel"
      id="exampleFormControlInputTel"
      label="Phone No."
      name='phone'
      value={formData.phone}
      onChange={handleChange}
    ></TEInput>
          <div className='mb-6 mt-4'>
            <div>Position Applied For</div>
            <select id="service" name="service" className=" border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleChange}>
              <option value="" disabled selected className='text-gray-400'></option>
              <option value="Swaknee Module">Swaknee Module</option>
              <option value="Electromagnetics/Knee Brace">Electromagnetics/Knee Brace</option>
              <option value="Educational Resources & Training">Educational Resources & Training</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor="disease"  >Years of Relevant Experience</label>
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
            <label htmlFor="disease" >Upload CV</label>
            <TEInput
              type="file"
              name='disease'
              id="disease"
              value={formData.disease}
              onChange={handleChange}
              className='border border-gray-100 p-2.5 rounded-lg w-full'
              />
          </div>
          <div className='mb-4'>
            <label htmlFor="disease" >Upload Cover Letter</label>
            <TEInput
              type="file"
              name='disease'
              id="disease"
              value={formData.disease}
              onChange={handleChange}
              className='border border-gray-300 p-2.5 rounded-lg w-full'
              />
          </div>
         
    
        
       
          <div className="flex justify-center p-5 w-full">
            <TERipple rippleColor="light">
              <button className='bg-[#35A0DA] px-8 py-3 rounded-full text-white' type='submit'>
              Submit Application
              </button>
            </TERipple>
          </div>
        </form>
      </div>
      <ToastContainer position='bottom-right' autoClose={3000} />
    </div>
    <div className='mx-[20vh] w-[90vh]'><img src={careerimg} alt="" />
    </div>
              </div>
        
  );
};

export default Jobapply;
