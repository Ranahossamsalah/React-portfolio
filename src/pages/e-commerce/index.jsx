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
      <h2 className=" text-center m-5  ">My Shop </h2>
      <div className=" products  row" style = {{}}>
        {products.map((item, index) => {
          return (
            <Link
              to={`/ecommerce/${item.id}`}
              key={index}
              className="single-prodict col-3 "
              style={{
               
                textDecoration: "none",
              }}
            >
                <div style={{border:' 1px solid grey ',height:'100%' , margin:'auto' , width:'97%' }}>
              <img style={{ width: "60%" ,height:'50%' }} src={item.image}></img>
              <h3
                style={{
                  fontSize: "1em",
                  width: "50%",
                  color: "black",
                  textDecoration: "none",
                  
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "10px" }}>{item.discription}</p>
              <h3
                style={{
                  fontSize: "2em",
                  width: "50%",
                  color: "orange",
                }}
              >
                <hr></hr>
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
