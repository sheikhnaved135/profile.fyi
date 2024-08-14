import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Card } from "antd";

const CartCard = ({ src, title, price, item, id }) => {
  const [cart, setCart] = useCart();
  const [load, setLoad] = useState(true);
  const { Meta } = Card;
  const handleRemove = () => {
    let newCart = [...cart];
    let result = newCart.findIndex((ele) => ele.id === id);

    newCart.splice(result, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("Item removed");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 800);
  }, []);

  return (
    <div className="bg-gray-200  rounded-xl shadow-lg transition-transform transform hover:scale-105">
      <Card
        style={{ width: 280 }}
        cover={
          load ? (
            <></>
          ) : (
            <img
              src={src}
              alt="image"
              className="h-64 w-64 object-contain transition-transform duration-300 ease-in-out hover:scale-105 "
            />
          )
        }
        hoverable
        bordered
        loading={load}
      >
        <Meta
          style={{ textAlign: "center", fontSize: "18px" }}
          title={title}
          description={`₹ ${price}`}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div className="flex gap-6 text-xl" style={{ alignItems: "center" }}>
            <button
              className="text-xl bg-blue-300 p-2 rounded-lg"
              onClick={() => {
                let newCart = [...cart];
                let index = cart.findIndex((ele) => ele.id == id);
                if (item.quantity <= 1) {
                  handleRemove();
                } else {
                  newCart[index].quantity--;
                  localStorage.setItem("cart", JSON.stringify(newCart));
                  setCart(newCart);
                }
              }}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              className="text-xl bg-blue-300 p-2 rounded-lg"
              onClick={() => {
                let newCart = [...cart];
                let index = cart.findIndex((ele) => ele.id == id);
                newCart[index].quantity++;
                localStorage.setItem("cart", JSON.stringify(newCart));
                setCart(newCart);
              }}
            >
              +
            </button>
          </div>
          <div>
            <button className="text-xl" onClick={handleRemove}>
              <FontAwesomeIcon className="text-blue-400" icon={faTrash} />
            </button>
          </div>
        </div>
        <h3 className="text-xl text-center mt-4 bg-blue-400">
          ₹{item.price * item.quantity}
        </h3>
      </Card>
    </div>
  );
};

export default CartCard;
