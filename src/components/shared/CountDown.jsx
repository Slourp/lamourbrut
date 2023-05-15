import React, { useState, useEffect } from 'react'

const CountDown = () => {
  const [isReady, setIsReady] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const countdownDate = new Date('June 30, 2023 23:00:00').getTime()
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      )
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    // Utilisation d'une fonction de rappel pour définir isReady
    setTimeout(() => {
      setIsReady(true)
    }, 500)

    return () => clearInterval(countdownInterval)
  }, [])

  // Vérification si le compte à rebours est prêt avant de l'afficher
  if (!isReady) {
    return null
  }
  return (
    <div
      className="flex flex-col items-center justify-center h-[400px] transparent font-arial-black text-lbpink"
      style={{
        textShadow: '1px 1px 2px black',
      }}
    >
      <div className="w-[800px] p-4 ">
        <div className="flex justify-center flex-col items-center">
          <h2 className="font-bold text-center mb-4 font-arial-black max-xs:text-[40px] max-sm:text-[50px] text-[100px] whitespace-nowrap max-lg:text-[50px]">
            IT-ACCESSORIES
          </h2>
          <p className="text-center max-xs:text-[30px] max-sm:text-[30px] text-[50px] max-lg:text-[50px]">
            FRIDAY 30th JUNE 23
          </p>
        </div>

        {isReady && (
          <div className="flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center p-2">
              <div className="text-7xl font-bold max-xs:text-[20px] max-sm:text-[30px] text-[70px] max-lg:text-[50px]">
                {countdown.days}
              </div>
              <div className="font-medium uppercase">Days</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-7xl font-bold max-xs:text-[20px] max-sm:text-[30px] text-[70px] max-lg:text-[50px]">
                {countdown.hours}
              </div>
              <div className="text-sm font-medium uppercase">
                Hours
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-7xl font-bold max-xs:text-[20px] max-sm:text-[30px] text-[70px] max-lg:text-[50px]">
                {countdown.minutes}
              </div>
              <div className="text-sm font-medium uppercase">
                Minutes
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-7xl font-bold max-xs:text-[20px] max-sm:text-[30px] text-[70px] max-lg:text-[50px]">
                {countdown.seconds}
              </div>
              <div className="text-sm font-medium uppercase">
                Seconds
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CountDown
