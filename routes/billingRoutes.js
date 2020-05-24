const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'USD',
            description: '$5 for 5 credits',
            source: req.body.id
        });
        req.user.credits += 5;
        res.send(await req.user.save());
    });
};