import React from 'react'

const NewsLetter = () => {
  return (
    <div
      style={{
        backgroundColor: '#F472B6',
        boxShadow: '0 0 5px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid #fff',
        borderRadius: '5px',
      }}
    >
      <h3 className="text-[25px] text-center font-arial-black">
        BE THE FIRST TO KNOW
      </h3>
      <p className="times-new-roman" style={{ textAlign: 'center' }}>
        The IT-ACCESSORIES are coming out soon, if you want yours,
        enter your email and we'll keep you posted !
      </p>
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <input
          className="text-black"
          type="email"
          placeholder="enter your email"
          required
          style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            minWidth: '200px',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '5px',
            padding: '10px',
            marginLeft: '10px',
          }}
        >
          SUSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
