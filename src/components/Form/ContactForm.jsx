import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    const name = form.current.elements.user_name.value
    const email = form.current.elements.user_email.value
    const message = form.current.elements.message.value

    if (!name || !email || !message) {
      toast.error('Please fill in all required fields')
      return
    }

    emailjs
      .sendForm(
        'service_619rvqa',
        'template_dyjd0bm',
        form.current,
        'szbbO2U5yMpdLf8mH'
      )
      .then(
        (result) => {
          console.log(result.text)
          toast.success(
            'Hello,Your message has been sent, and we thank you for it. We will answer you as soon as possible. Xoxo L’Amour Brut',
            {
              autoClose: 5000,
            }
          )
          setTimeout(() => {
            document.location.href = '/'
          }, 10000)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ fontFamily: 'arial-black' }}
        className="pb-8 max-w-lg mx-auto flex-col"
      >
        <div>
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
            <label htmlFor="email" className="block font-medium mb-2">
              Your mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your mail"
              name="user_email"
              required
              className="w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              required
              className="w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg text-black"
            />
          </div>
          <div className="flex justify-center absolute">
            <button
              type="button"
              onClick={sendEmail}
              className="px-4 py-2 bg-white text-black font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default ContactForm
