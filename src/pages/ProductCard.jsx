import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";
import { Card } from "antd";
const { Meta } = Card;

const ProductCard = ({ src, title, price, item, load }) => {
  const [cart, setCart] = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const res = cart.some((ele) => ele.id === item.id);
    let myCart = [...cart];

    if (res) {
      let index = myCart.findIndex((ele) => ele.id === item.id);
      myCart[index].quantity++;
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Added to Cart");
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...item, quantity }])
      );
      setCart([...cart, { ...item, quantity }]);
      toast.success("Added to cart");
    }
  };

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
        <button
          className="bg-yellow-400 w-full py-3 rounded-lg mt-3 font-semibold hover:bg-yellow-500"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </Card>
    </div>
  );
};

export default ProductCard;
