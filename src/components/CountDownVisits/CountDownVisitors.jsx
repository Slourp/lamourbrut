import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga'

function VisitsCounter() {
  const [visitCount, setVisitCount] = useState(0)

  useEffect(() => {
    initializeAnalytics()
    incrementVisitCount()
  }, [])

  const initializeAnalytics = () => {
    ReactGA.initialize('G-ZYGZP1SDBM', {
      gaOptions: {
        apiSecret: 'miaIgB18QtqOOgZ10gTf6w', // Remplacez par votre propre code secret de l'API
      },
    })
    ReactGA.pageview(window.location.pathname)
  }

  const incrementVisitCount = () => {
    fetch('https://amour-brut.com', {
      method: 'POST',
      // Autres options de configuration si nécessaire
    })
      .then((response) => response.json())
      .then((data) => {
        setVisitCount(data.visitCount)
        ReactGA.event({
          category: 'Visits',
          action: 'Visit Incremented',
          value: data.visitCount,
        })
      })
      .catch((error) => {
        console.error(
          "Erreur lors de l'incrémentation du compteur de visite:",
          error
        )
      })
  }

  return (
    <div className="mt-[300px]">
      <h1>Compteur de visite : {visitCount}</h1>
      {/* Le reste de votre contenu */}
    </div>
  )
}

export default VisitsCounter
