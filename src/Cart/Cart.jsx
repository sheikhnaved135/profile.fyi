import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuant, setTotalQuant] = useState(0);
  const [GST, setGST] = useState(15);
  const [total, setTotal] = useState(0);
  // const [discount, setDiscount] = useState(25);
  const getTotalPrice = () => {
    let bill = 0;
    cart.forEach((ele) => (bill += Number(ele.price * ele.quantity)));
    setTotalPrice(Number(bill.toFixed(2)));
  };
  const getTotalItem = () => {
    let item = 0;
    cart.forEach((ele) => (item += ele.quantity));
    setTotalQuant(item);
    // setGST(Number((GST * item).toFixed(2)));
  };

  const getTotal = () => {
    let mytotal = 0;
    mytotal = mytotal + totalPrice + GST + delivery;
    setTotal(mytotal.toFixed(2));
    console.log(mytotal.toFixed(2));
  };

  useEffect(() => {
    getTotalPrice();
    getTotalItem();
  }, [cart, setCart]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-10">
        {cart?.length === 0 ? (
          <div className="flex flex-col items-center gap-6 w-full">
            <h1 className="text-2xl font-bold">Cart is empty</h1>
            <button
              className="px-6 py-3 bg-green-300 font-semibold text-lg cursor-pointer rounded-md"
              onClick={() => navigate("/")}
            >
              Buy Now
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="flex m-3 flex-wrap justify-center ">
              {cart?.map((item) => (
                <div className="m-6 h-[60vh]" key={item.id}>
                  <CartCard
                    src={item.images[0]}
                    title={item.title}
                    price={item.price}
                    item={item}
                    id={item.id}
                  />
                </div>
              ))}
            </div>
            <div
              className="w-full  max-w-sm mt-10 p-5 border rounded-md shadow-md bg-gray-50 mr-6"
              style={{ height: "80%" }}
            >
              <h2 className="text-xl font-semibold text-center bg-yellow-200 p-3 rounded-md ">
                Order Summary
              </h2>
              <div className="flex justify-between mt-5">
                <div className="text-xl">
                  <h3>Subtotal</h3>
                  <h3>Total Items</h3>
                  {/* <h3>Discount</h3> */}
                  <h3 className="mt-12">Total</h3>
                </div>
                <div className="text-xl">
                  <h3>₹{totalPrice}</h3>
                  <h3>{totalQuant}</h3>
                  <h3 className="mt-12">₹{totalPrice}</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="flex flex-col items-center gap-5 mt-10">
          <button
            className="bg-green-300 px-6 py-3 text-lg cursor-pointer w-1/3 rounded-full border"
            onClick={() => {
              toast.success("Order placed");
              localStorage.removeItem("cart");
              setTimeout(() => {
                location.reload();
              }, 1000);
            }}
          >
            Pay
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
