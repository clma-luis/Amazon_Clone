import React from "react";
import "./Order.scss";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <div className="order_info">
        <div className="separator__box">
          <h2>Your Recent Purchase</h2>
          <p className="order__date">
            {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
          </p>
        </div>
        <p className="order__id">
          <small>{order.id}</small>
        </p>
      </div>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          hidden={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
