import React from 'react';

const Map = () => {
  return (
    <div>
      <div className="lg:mt-[22vh] mt-[12vh] bg-[#0288D1] h-[12vh] px-[20vh] text-white font-bold text-5xl opacity-80 p-5">
        Contact Us
      </div>
      <div className="flex flex-col lg:flex-row lg:py-[10vh]">
        <div className="text-4xl px-8 lg:px-40 mt-5 lg:w-1/2">
          <p className="mb-10">Hello, get in <br />touch with us</p>
          <div className="text-lg">
            <span className="text-blue-500 text-xl font-semibold">Corporate Office <br /></span>
            Swayogya Rehab Solutions Pvt Ltd, <br />
            Room No 206 (C), School of Chemical Technology, <br />
            KIIT-TBI, KIT University, Bhubaneswar, India
          </div>
          <div className="text-blue-500 mt-8 text-xl font-semibold">For any Query</div>
          <div className="text-lg mt-2">
            Contact us on
            <div className="text-blue-500 mt-2 cursor-pointer">swayogya19@gmail.com <br />
              +91 9079938655
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:mr-20 mt-8 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.5810205258294!2d85.82004777480579!3d20.358920210448726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093fd2e5dab3%3A0x9e6695c4557e144e!2sSwayogya%20Rehab%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712369103440!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 4 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
