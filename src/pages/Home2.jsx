import React from "react";
import Navbar from "../components/Navbar";
import cart from "../assets/man-playing-tablet-with-shopping-cart.jpg";
import laptop from "../assets/laptop-shopping-bags-online-shopping-concept.jpg";
import ecom from "../assets/4092982.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Home2 = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Navbar />
      <div>
        <img
          width={"100%"}
          height={"100%"}
          //   style={{ objectFit: "contain" }}
          //   style={{ objectFit: "contain" }}
          src={ecom}
          alt="image"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "pink",
            padding: "30px",
            borderRadius: "20px",
            width: "30%",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "18px",
          }}
          onClick={() => navigate("/products")}
        >
          SHOP NOW {"  "}
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Featured Products</h1>
      </div>
    </>
  );
};

export default Home2;
