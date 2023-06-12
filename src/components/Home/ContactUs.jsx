import React from 'react'
import ContactForm from '../Form/ContactForm'
import Image1 from '../../assets/home/photocontact.jpg'

const ContactUs = () => {
  return (
    <section className="flex flex-col pb-5 md:flex-row sm:flex-row overflow-hidden h-full md:h-screen bg-black">
      <div className="w-full md:w-[60%] sm:w-[55%]">
        <img
          src={Image1}
          alt="Hero"
          className="w-full object-cover h-[50vh] md:h-screen sm:h-[105%]"
        />
      </div>
      <div className="w-full md:w-[40%] text-white px-4 md:p-12 flex flex-col justify-center items-baseline mt-3 max-xs:mx-5 sm:w-[40%]">
        <h2 className="text-5xl md:text-[90px] pt-5 font-arial-black max-xs:font-extrabold">
          Contact
        </h2>
        <p className="mb-8 max-w-[800px] text-lg md:text-[25px] font-times-new-roman">
          Please contact us if you have any questions, and we will get
          back to you as soon as possible.
        </p>
        <div className="items-baseline pb-5 ">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactUs
