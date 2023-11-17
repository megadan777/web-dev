if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

console.log(stripeSecretKey, stripePublicKey);

const express = require('express');
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/store', function(req, res) {
  fs.readFile('items.json', function(err, data) {
    if (error) {
      res.status(500).end();
    } else {
      const items = JSON.parse(data);
      res.render('store.ejs', {
        stripePublicKey: stripePublicKey;
        items: items
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
