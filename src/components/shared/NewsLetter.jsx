import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function NewsLetter() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_q3ltw1t',
        'template_qdyl6su',
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
        `Merci de vous être abonné(e) à notre NewsLetter pour ne rien rater !`
      )
    }
  }

  return (
    <div className="w-[500px] max-sm:w-full mt-5 h-[200px] opacity-80 text-white bg-lbpink shadow-md flex flex-col justify-center border-2 border-white rounded-md max-sm:mb-0">
      <h3 className="text-2xl max-sm:text-[20px] font-arial-black text-center mb-4">
        BE THE FIRST TO KNOW
      </h3>
      <p className="font-serif text-center max-sm:text-[14px]">
        The IT-ACCESSORIES are coming out soon, if you want yours,
        enter your email and we'll keep you posted !
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col sm:flex-row justify-center items-center mt-2"
      >
        <input
          type="email"
          name="user_email"
          id="email"
          placeholder="enter your email"
          required
          className="text-black border border-gray-400 rounded-md px-2 py-1 sm:mb-0 sm:mr-2 max-w-[160px] max-sm:text-[12px]"
        />
        <button
          type="submit"
          className="bg-black text-rounded-md px-2 py-1 max-sm:text-[12px] max-sm:mt-3"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
