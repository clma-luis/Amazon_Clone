/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51JIltuIBTeQ7oc8iifbrjOyz2zrUOorNeWUDJsiPRZ61TxWbslHpD4RPaXXQodAr6MnyodlHxN0LUGXN8QgbbTl300IQCsb9Qq");
    
const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(201).send("hello world");
});

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
   
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  })

  app.listen(3000, )

exports.api = functions.https.onRequest(app);

