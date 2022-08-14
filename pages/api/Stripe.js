import Stripe from 'stripe'

console.log(process.env.NEXT_STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY);



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
        shipping_address_collection:{
          allowed_countries:['IN'],
        },
        shipping_options:[
            {
                shipping_rate:'shr_1LWEC7SGr6vvmBhjx73YB21E',
                shipping_rate:'shr_1LWECySGr6vvmBhjA4wqhB2K'
            }
        ],
        line_items: req.body.map((item)=>{
            const img = item.image.asset._ref;
            console.log(img);
            const NewImg = img.replace('image-','https://cdn.sanity.io/images/fqvhx5pe/production/').replace('-webp','.webp');
            console.log(NewImg);
            return {
                price_data:{
                    currency:'inr',
                    product_data:{
                        name:item.name,
                        images:[NewImg],
                    },
                    unit_amount: item.price * 100,
                },
                adjustable_quantity:{
                    enabled:true,
                    minimum:1,
                },
                quantity: item.quantity
            }
        }),
       
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}