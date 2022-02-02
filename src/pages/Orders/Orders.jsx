import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import {
  collection,
  onSnapshot,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import Order from '../../components/Order/Order'
import "./Orders.scss";


const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const userRef = doc(collection(db, "user"), user?.uid);
      const q = query(collection(userRef, "order"), orderBy("created", "desc"));

      onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
    <h1>Your Orders</h1>

    <div className="orders__order">
      {orders?.map((order) => (
        <Order order={order} />
      ))}
    </div>
  </div>
  );
};

export default Orders;
