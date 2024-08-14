import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/profile.fyi.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Avatar, Badge, Space } from "antd";
import { useCart } from "../context/CartContext";

const Navbar = ({ children }) => {
  const navigate = useNavigate();
  const [cart] = useCart();
  return (
    <>
      <div className="flex justify-between items-center bg-gray-500 w-full h-20 shadow-md">
        <div className="flex items-center ml-5">
          <NavLink to={"/"} className="text-red-500">
            <img src={logo} alt="logo" className="h-12 w-12" />
          </NavLink>
        </div>
        <div className="flex gap-12 items-center pr-8">
          <NavLink
            to={"/"}
            className="text-xl no-underline text-black hover:text-gray-700"
          >
            Home
          </NavLink>{" "}
          <NavLink
            to={"/products"}
            className="text-xl no-underline text-black hover:text-gray-700"
          >
            Products
          </NavLink>
          <NavLink
            to={"/cart"}
            className="text-xl no-underline text-black hover:text-gray-700"
          >
            <Space size={"middle"} onClick={() => navigate("/cart")}>
              <Badge count={cart.length} color="yellow">
                <Avatar shape="square" size={"large"}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Avatar>
              </Badge>
            </Space>
          </NavLink>
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
    </>
  );
};

export default Navbar;
