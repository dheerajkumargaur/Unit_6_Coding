import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://movie-fake-server.herokuapp.com/products")
      .then((res) => {
        setData(res.data);
      });
  };
  const lowToHigh = () => {
    var arr = [...data];
    arr.sort((a, b) => a.price - b.price);
    setData(arr);
  };
  const highToLow = () => {
    var arr = [...data];
    arr.sort((a, b) => b.price - a.price);
    setData(arr);
  };

  return (
    <>
      <button onClick={lowToHigh}>Low To High</button>
      <button onClick={highToLow}>High To Low</button>
      <div className="page">
        {data.map((e, i) => (
          <Link to={`/products/${e.id}`} className="card" key={e.id}>
            <img src={e.image} alt="" />
            <h3>Brand : {e.title}</h3>
            <p>Category : {e.brand}</p>
            <p>Price : {e.category}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
