import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Layout from './pages/Layout'
import Products from './components/Products/Products'
import Basket from './components/Basket/Basket'
import CheckOut from './components/Checkout/CheckOut'

const ShopifyApp = () => {
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
