import React from 'react';

const Map = () => {
  return (
    <div className='w-full flex justify-end px-40 py-48 '>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.5810205258294!2d85.82004777480579!3d20.358920210448726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093fd2e5dab3%3A0x9e6695c4557e144e!2sSwayogya%20Rehab%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712369103440!5m2!1sen!2sin"
        width="500"
        height="600"
        style={{ border: 4 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
