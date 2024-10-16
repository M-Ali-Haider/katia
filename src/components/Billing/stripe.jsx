"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutPage from "./checkout";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export function convertToSubcurrency(amount, factor = 100) {
  return Math.round(amount * factor);
}

const appearance = {
  theme: "night",
  variables: {
    colorText: "#ffffff",
    colorPrimary: "#ffffff",
  },
  rules: {
    ".Label": {
      color: "#ffffff",
    },
    ".Input": {
      backgroundColor: "#25262D",
      color: "#ffffff",
    },
  },
};

const Stripe = () => {
  const amount = 49.99;
  return (
    <div className="p-8 border rounded-xl mt-8">
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
          appearance: appearance,
        }}
      >
        <CheckOutPage amount={amount} />
      </Elements>
    </div>
  );
};

export default Stripe;
