import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Image1 from '../../assets/home/photocontact.jpg';

const ContactUs = () => {
  const handleContactUs = () => {
    window.location.href = 'mailto:contactlamourbrut@gmail.com';
  };

  return (
    <section className="flex flex-col md:flex-row overflow-hidden h-full md:h-screen bg-black">
      <div className="w-full md:w-[60%]">
        <img
          src={Image1}
          alt="Hero"
          className="w-full object-cover h-[50vh] md:h-screen"
        />
      </div>
      <div className="w-full md:w-[40%] text-white px-4 md:p-12 flex flex-col justify-center items-baseline mt-3">
        <h2 className="text-5xl md:text-[90px]">
          Contact
        </h2>
        <p className="mt-4 md:mt-8 max-w-[800px] text-lg md:text-[22px]">
          Please contact us if you have any questions, and we will get back to you as soon as possible.
        </p>
        <button
          onClick={handleContactUs}
          className="mt-8 md:mt-24 flex items-center text-[22px] font-extrabold border-[6px] border-white uppercase p-1 px-5"
        >
          Contact us
          <HiArrowRight className="ml-4" />
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
