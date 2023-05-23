import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function NewsLetter() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_kngbh0f',
        'template_g8cvysg',
        form.current,
        'szbbO2U5yMpdLf8mH'
      )
      .then(
        (result) => {
          console.log(result.text)
          toast.success(
            'Hello, You’re now subscribed to our newsletter, See you soon. L’Amour Brut',
            {
              autoClose: 10000,
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
    <div className="w-[475px] max-sm:w-full max-xs:h-[150px] mt-5 h-[180px] opacity-80 text-white bg-lbpink shadow-md flex flex-col  items-centerjustify-center border-2 border-white rounded-md max-sm:mb-0">
      <h3 className="text-2xl max-sm:text-[20px] max-xs:text-[14px] max-xs:tracking-wide	 font-arial-black text-center mb-4">
        BE THE FIRST TO KNOW
      </h3>
      <p className="font-times-new-roman text-center max-sm:text-[14px] max-xs:text-[12px]">
        The IT-ACCESSORIES are coming out soon, if you want yours,
        enter your email and we'll keep you posted !
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col sm:flex-row justify-center items-center mt-2 max-xs:flex-row"
      >
        <div>
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
        </div>
      </form>
      <ToastContainer className="mt-[150px]" />
    </div>
  )
}

export default NewsLetter
