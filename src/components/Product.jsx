import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asc, desc, getall } from "../redux/Action";
import "./Products.css";

export const Product = () => {
  const [data, setData] = useState([]);
  let searchData = useSelector((store) => store.data);

  const dispatch = useDispatch();

  // searchData =

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://movie-fake-server.herokuapp.com/products")
      .then(({ data }) => {
        setData(data);
        dispatch(getall(data));
      });
  };

  return (
    <>
      <button
        onClick={() => {
          dispatch(asc(true));
        }}
      >
        Low to High
      </button>
      <button
        onClick={() => {
          dispatch(desc(true));
        }}
      >
        High to Low
      </button>

      <div className="page">
        {searchData.map((e, i) => (
          <Link to={`/products/${e.id}`} className="card" key={e.id}>
            <img src={e.image} alt="" />
            <h3>{e.title}</h3>
            <p>Brand : {e.brand}</p>
            <p>category : {e.category}</p>
            <p> Price : $ {e.price}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
