import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Home() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          <h1>React Web Developer</h1>
        </Card.Title>
        <Card.Text>Rana hossam salah</Card.Text>
        <div>
          <Card.Img variant="top" src="mycv.png" />
        </div>
        <p>
          I am a web developer . I can work with
          html,css,javascript,angular,react,bootstrap,sass. if you need any new
          job related to them you can contact me in the icons bellow
        </p>
      </Card.Body>
      <Card.Footer className="text-muted">
        contact me
        <i class="bi bi-facebook"></i>
      </Card.Footer>
    </Card>
  );
}
export default Home;
