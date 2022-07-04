import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  useEffect(() => {
    fetchproducts();
  }, []);
  const fetchproducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setproduct(json));
  };

  const [products, setproduct] = useState([]);
  return (
    <div className="product-wrapper container  ">
      <h2 className=" text-center m-5 bg-light ">My Shop </h2>
      <div className=" products   row m-5" style={{}}>
        {products.map((item, index) => {
          return (
            <Link 
              to={`/ecommerce/${item.id}`}
              key={index}
              className="single-product col-3 shadow p-3 mb-5 bg-white rounded "
              style={{
                textDecoration: "none",
              }}
            >
              <div
              className=" text-center  " 
                style={{
                  border: " 1px solid grey ",
                  height: "100%",
                  margin: "auto",
                  width: "97%",
                  
                }}
              >
                <img
                  className=" container " 
                  style={{ width: "60%", height: "50%" }}
                  src={item.image}
                ></img>
                <h3
                className="container my-3"
                  style={{
                    fontSize: "0.8em",

                    color: "black",
                    textDecoration: "none",
                    textAlign: "center",
                    color:'grey'
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "10px" }}>{item.discription}</p>
                <h3
                  className="bg-light "
                  style={{
                    fontSize: "1.2em",
                    textAlign: "center",
                    color: "orange",
                  }}
                >
                  <hr></hr> price:
                  {item.price}
                </h3>
              </div>
            </Link>
          );
          console.log(products);
        })}{" "}
      </div>
    </div>
  );
};
export default Ecommerce;
