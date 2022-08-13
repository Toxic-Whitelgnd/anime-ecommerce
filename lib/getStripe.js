import {loadStripe} from '@stripe/stripe-js'

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe('pk_test_51LWDqmSGr6vvmBhjfbUs7kwSwRUBro89rMHV7nSpaX9R8McfqUFDod6559f8v9CoePZgVb1bV3dPWB6ydwkdW1BG00gKphvRBc');
        console.log("came to getStripe:"+Object.values(stripePromise));
    }
    return stripePromise;
}

export default getStripe;