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
    <div className="bg-lbpink border-2 border-lbgreen mt-3 max-sm:w-full">
      <div />
      <h2 className="mt-4 leading-5 font-arial-black max-xs:text-[15px] max-sm:text-[12px] text-[15px] max-lg:text-[20px]">
        The IT-ACCESSORIES are coming out soon, if you want yours,
        enter your email and we'll keep you posted !
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col sm:justify-between items-center">
          <label className="sm:mr-2 mb-2 sm:mb-0" htmlFor="email">
            Adresse e-mail :
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            className="w-full sm:w-auto px-3 py-2 leading-tight border-2 border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:border-lbgreen"
            placeholder="Entrez votre adresse e-mail"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 px-5 py-2 mb-4 text-white font-semibold bg-lbgreen rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          S'inscrire
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
