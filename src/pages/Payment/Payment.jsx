import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from "../../axios";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import { collection, onSnapshot, setDoc, doc, addDoc} from "firebase/firestore";


import "./Payment.scss";

const Payment = () => {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
   /*  onSnapshot(collection(db, "users"), (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
 */
    //generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then( async({ paymentIntent }) => {
        console.log('yo soy el paymentIntent', paymentIntent);

        const handleinfo = async () => {
            
          const userRef = doc(db, "user", user?.uid);
          const orderRef = doc(userRef, "order", paymentIntent.id)
          await setDoc(orderRef, {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        };

        handleinfo();

        
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders", { replace: true });

      })
    }



  const handleChange = (e) => {
    //listen for changes in the CardElement
    //and display any errors as the customer types their card details

    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <h3>Your order ({basket?.length} items)</h3>
      <div className="payment__container">
        <div className="payment__product">
          {basket.map((item) => {
            return (
              <div key={item.id}>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>

        <div className="payment__subtotal">
          <h3>Payment Method</h3>

          <form className="payment__stripe" onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className="subtotal">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket?.length} items):
                    <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />

            <button disabled={processing || disabled || succeeded}>
              {processing ? <p>Processing</p> : "Buy Now"}
            </button>
          </div>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default Payment;
