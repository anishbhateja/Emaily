const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    await stripe.charges.create({
      amount: 36500,
      currency: 'inr',
      source: req.body.id,
      description: '$5 for 5 credits',
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
