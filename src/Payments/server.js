const env = require('react-dotenv')
const stripe = require('stripe')(env.SECRET_KEY);
const express = require('express');
const app = express();
app.use(express.static(','))

const DOMAIN = env.URL_PROJECT

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
})

})

