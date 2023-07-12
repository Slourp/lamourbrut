import React, { useEffect } from 'react'

const PaymentPage = () => {
  useEffect(() => {
    // Rediriger l'utilisateur vers la page de paiement Shopify
    window.location.href =
      'https://10a614.myshopify.com/checkouts/c/c6dd15be3279a1100efd5db07f9954bf/information'
  }, [])

  return (
    <div>
      <h1>Page de paiement</h1>
      {/* Autres éléments de la page de paiement */}
    </div>
  )
}

export default PaymentPage
