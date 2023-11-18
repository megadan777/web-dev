if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

console.log(stripeSecretKey, stripePublicKey);

const express = require('express');
const app = express();
const fs = require('fs');
const stripe = require('stripe')(stripeSecretKey)

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.static('public'));

app.get('/store', function(req, res) {
  fs.readFile('items.json', function(err, data) {
    if (error) {
      res.status(500).end();
    } else {
      const items = JSON.parse(data);
      res.render('store.ejs', {
        stripePublicKey: stripePublicKey;
        items: JSON.parse(data)
      })
    }
  })
})

app.get('/store', function(req, res) {
  fs.readFile('items.json', function(err, data) {
    if (error) {
      res.status(500).end();
    } else {
      const itemsJson = JSON.parse(data)
      const itemsArray = itemsJson.music.concat(itemsJson.merch)
      let total = 0
      req.body.items.forEach(function(item) {
        const itemJson = itemsArray.find(function(i) {
          return i.id = item.id
        })
        total = total + itemJson.price * item.quantity
      })

      stripe.charges.create({
        amount: total,
        source: req.body.stripeTokenId,
        currency: 'aud'
      }).then(function() {
        res.json({ message: 'Successfully purchased items' })
      }).catch(function() {
        res.status(500).end()
      })
    }
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
