import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cv from "./mycv.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
function Home() {
  return (
    <Card className="text-center bg-light ">
      <Card.Body>
        <Card.Title>
          <h1 style={{ background: "#D3D3D3" }}>React Web Developer</h1>
        </Card.Title>
        <Card.Text>
          <div style={{ background: "#F0F0F0" }}>Rana hossam salah</div>
        </Card.Text>
        <div className="d-flex container">
          <img src={cv} className="w-25 col-3    " />
          <p className="text-align-center my-auto w-75 col-3 shadow p-5 mb-5 bg-white rounded ">
            Hi i am Rana Hossam Salah. I am woorking as a web developer since
            the prevoius months as a freelancer .
            <br /> My Skill Set :
            html,css,javascript,angular,react,bootstrap,sass. 
            <br />
            I have developed many website and  the I have been part of web design project
            <br />
            if you need me to work on any
            new job you can contact me in the icons bellow
          </p>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        contact me      : 
        <a href="https://www.facebook.com/ranahossam.salah"  className="mx-4" target="_blank" style={{color:"grey"}} ><i   class="bi bi-facebook" ></i></a>
        <a href="https://github.com/Ranahossamsalah?tab=repositories"className="mx-4" target="_blank"style={{color:"grey"}} ><i class="bi bi-linkedin"></i></a>
        <a href="https://github.com/Ranahossamsalah?tab=repositories"className="mx-4" target="_blank" style={{color:"grey"}}> <i class="bi bi-github"></i></a>

      </Card.Footer>
    </Card>
  );
}
export default Home;
