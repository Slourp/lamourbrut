import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Layout from './pages/Layout'
import Products from './components/Products'
import Basket from './components/Basket'

const ShopifyApp = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/panier" component={Basket} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default ShopifyApp
