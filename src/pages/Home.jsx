import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import laptop from "../assets/laptop-shopping-bags-online-shopping-concept.jpg";
import cart from "../assets/man-playing-tablet-with-shopping-cart.jpg";
import Spinner from "./Spinner";
import Navbar from "../components/Navbar";
import ecom from "../assets/4092982.jpg";

const Home = () => {
  const [product, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [shimmer, setShimmer] = useState(true);
  const [totalResult, setTotalResult] = useState(0);

  const getData = async () => {
    try {
      setLoad(true);
      setShimmer(true);
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res?.data.products);
      setTotalResult(res?.data.total);
      setLoad(false);
      setTimeout(() => {
        setShimmer(false);
      }, 1200);
      // console.log(res?.data.products);
    } catch (error) {
      setLoad(false);
      console.log(`error in getting data ${error}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <>
        {load ? (
          <Spinner />
        ) : (
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {product?.map((item) => (
              <div className="m-2 h-[60vh]" key={item.id}>
                <ProductCard
                  key={item.id}
                  src={item.images[0]}
                  title={item.title}
                  price={item.price}
                  item={item}
                  load={shimmer}
                />
              </div>
            ))}
          </div>
        )}
      </>
    </>
  );
};

export default Home;
