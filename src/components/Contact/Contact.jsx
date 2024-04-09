import  { useRef, useState } from 'react';
import msgicon from '../../assets/msg.png';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { CgPhone } from 'react-icons/cg';
import { FaLocationDot, FaArrowRightLong } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TEInput, TERipple } from "tw-elements-react";
import { TETextarea } from "tw-elements-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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
            message: ''
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
    <div className='min-h-screen px-5 lg:px-40 '>
      <div className='flex justify-center text-[#0288D1] lg:text-5xl text-2xl font-bold'>Get in Touch</div>
      <div className='flex justify-center text-[#0288D1] font-semibold'>CONTACT US</div>
      <div className='flex flex-col lg:flex-row mt-10 lg:mt-20'>
        <div className='lg:w-1/2'>
          <div className='flex items-center lg:text-xl font-semibold'>
            Send us a message <img className='w-10 ml-3' src={msgicon} alt='msgicon' />
          </div>
          <div className='opacity-65 lg:mt-4'>
            Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our health community.
          </div>
          <div className='mt-5 flex flex-col gap-3 items-start'>
            <div className='flex items-center'>
              <BsFillEnvelopeFill size={30} color='#00897b' />
              <span className='ml-2'>swayogya19@gmail.com</span>
            </div>
            <div className='flex items-center mt-3 lg:mt-0'>
              <CgPhone size={30} color='#00897b' />
              <span className='ml-2'>+91 9079938655</span>
            </div>
          </div>
          <div className='mt-5 flex items-start gap-3'>
            <FaLocationDot size={30} color='#00897b' />
            <div>
              Swayogya Rehab Solutions Pvt Ltd, <br />
              Room No 206 (C), School of Chemical Technology, <br />
              KIIT-TBI, KIT University, Bhubaneswar, India
            </div>
          </div>
        </div>

        <div className='lg:w-1/2   lg:ml-20 mt-10  lg:mt-1 text-[#626365]'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className='mb-2'>Your name</div>
            <TEInput
                type="text"
                name='name'
                id="exampleFormControlInput1"
                label="Full Name"
                value={formData.name}
                onChange={handleChange} 
          ></TEInput>
      
            <div className='mt-4 mb-2'>Phone Number</div>
            <TEInput
      type="tel"
      id="exampleFormControlInputTel"
      label="Phone input"
      name='phone'
      value={formData.phone}
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
      
            <div className='mt-4 mb-2'>Write Your message here</div>
           
            <div className="flex justify-center">
      <div className="relative mb-3 w-full ">
        <TETextarea id="textareaExample" className='resize-none' label="Message"    name='message'
              value={formData.message}
              onChange={handleChange}  rows={4}></TETextarea>
      </div>
    </div>
         
            <br />
            <div className='mb-10 lg:mb-0'>
             <TERipple rippleColor="light"> 
              
            <button className='  hover:bg-[#212ea0] bg-[#00897b]  px-5 py-3 ml-32 lg:ml-0 rounded-full  text-white' type='submit'>
              Submit now 
            </button>
            </TERipple>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position='bottom-right' autoClose={3000} />
    </div>
  );
};

export default Contact;
