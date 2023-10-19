if (process.env.node_ENV !== 'production') {
  require('dotenv').load()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey, stripePublicKey)

  const express = require('express')
  const app = express()
  
  
  app.set('view engine', 'ejs')
  app.use(express.static('public'))
  
  app.get('/store')

  app.listen(3000)