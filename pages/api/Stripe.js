const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    try {
      // Create Checkout Sessions from body params.
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options:[
            {
                shipping_rate:'shr_1LWEC7SGr6vvmBhjx73YB21E',
                shipping_rate:'shr_1LWECySGr6vvmBhjA4wqhB2K'
            }
        ],
        line_items: req.body.map((item)=>{
            const img = item.image.asset._ref;
            const NewImg = img.replace('image-','https://cdn.sanity.io/images/fqvhx5pe/production/').replace('-webp','.webp');

            return {
                price
            }
        }),
       
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }

      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}