import React, { useState } from 'react'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
  }

  return (
    <form
      style={{fontFamily: 'arial-black'}}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto flex-col"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-2">
          Your name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 focus:text-black"
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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 focus:text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          placeholder="Enter your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          className="w-[300px] lg:w-[500px] sm:w-[300px] px-4 py-2 rounded-lg shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 focus:text-black"
        />
      </div>
      <div className="flex justify-center absolute">
        <button
          type="submit"
          className=" px-4 py-2 bg-white text-black font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
        >
          Envoyer mon message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
