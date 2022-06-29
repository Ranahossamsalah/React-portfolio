import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Singleproduct = () =>  {
const urlparams = useParams();
useEffect(() => {
    fetchproducts();
  }, []);
  const fetchproducts = () => {
    fetch(`https://fakestoreapi.com/products/${urlparams.id}`)
      .then((res) => res.json())
      .then((json) => setproduct(json));
  };

  const [product, setproduct] = useState({});
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.discription}
        </Card.Text>
        <h2>{product.price}</h2>
      </Card.Body>
    </Card>
    )
}
export default Singleproduct;