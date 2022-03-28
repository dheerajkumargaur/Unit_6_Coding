import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  const { prod, setProd } = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(`https://movie-fake-server.herokuapp.com/products/${id}`)
      .then((res) => {
        setProd(res.data);
      });
  };
  return (
    <div>
      <h2>Title : {prod.title}</h2>
      <div className="Details">
        <div>
          <img src="{prod.image}" alt="" />
        </div>
        <div>
          <p>Brand: {prod.brand}</p>
          <p>Category : {prod.category}</p>
          <p>Price : {prod.price}</p>
        </div>
      </div>
    </div>
  );
};
