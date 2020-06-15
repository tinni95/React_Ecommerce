import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishable_key =
    "pk_test_51GsU6iDyvaVA7AX2AHjnJ61vLfIOjvIZf33F8K6tpPcMuPJcjzaexNiSXsVNuRWVjn0LdZWI7kYqHno9gMpEy6Nr00w4qtIAAF";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successfull");
      })
      .catch((error) => {
        console.log("Error paying");
        alert("There was an issue with your payment");
      });
  };

  return (
    <StripeCheckout
      currency="EUR"
      locale="it"
      label="PAY NOW"
      name="Diverse E-Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Lwo.svg"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishable_key}
    />
  );
};

export default StripeCheckoutButton;
