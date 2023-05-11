import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_q3ltw1t',
        'template_vvq2wv6',
        form.current,
        'ydGYh6NeaKR8hWmrF'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    if (sendEmail) {
      document.location.href = '/'
      alert(
        `Votre message a bien été pris en compte et nous en vous remercions. Nous vous répondrons dans les plus brefs délais. L'Amour Brut`
      )
    }
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{ fontFamily: 'arial-black' }}
      className="pb-8 max-w-lg mx-auto flex-col"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-2">
          Your name
        </label>
        <input
          type="text"
          name="user_name"
          id="name"
          placeholder="Enter your name"
          required
          className="w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg text-black"
        />
      </div>
      <div className="mb-4">
        <label
          name="user_email"
          htmlFor="email"
          className="block font-medium mb-2"
        >
          Your mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your mail"
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-2">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message"
          onChange={(event) => setMessage(event.target.value)}
          required
          className="w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg text-black"
        />
      </div>
      <div className="flex justify-center absolute">
        <button
          value="Send"
          type="submit"
          className=" px-4 py-2 bg-white text-black font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
