import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Layout from './pages/Layout'
import Products from './components/Products'
import Basket from './components/Basket'
import CheckOut from './components/CheckOut'

const ShopifyApp = () => {

  const ShopifyApp = () => {
    const cartItems = [] // Remplacez par votre logique pour obtenir les éléments du panier
    const products = [] // Remplacez par votre logique pour obtenir les produits correspondants aux éléments du panier
    const totalPrice = 0 // Remplacez par votre logique pour calculer le prix total
    const handleBuy = () => {
      // Logique pour traiter l'achat
    }
  

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/panier" component={Basket} />
          <Route exact path="/checkout">
            <CheckOut
              cartItems={cartItems}
              products={products}
              totalPrice={totalPrice}
              onBuy={handleBuy}
            />
          </Route>
          {/* Ajout de la route pour la page de paiement */}
        </Switch>
      </Layout>
    </Router>
  )
}

export default ShopifyApp
