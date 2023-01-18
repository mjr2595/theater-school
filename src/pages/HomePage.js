import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import MainSplashImage from "../app/assets/img/main-splash.jpg";

const HomePage = () => {
    return (
        <Container className="text-center">
            <Row>
                <h2>
                    Lights, Camera, <i>Reaction</i>
                </h2>
            </Row>
            <Row>
                <a role="button" className="btn btn-dark btn-lg" href="/classes">
                    Sign up for a class now!
                </a>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col>
                    <img src={MainSplashImage} className="mx-auto mainSplashImage" alt="main splash" />
                </Col>
            </Row>
        </Container>
    );
};
export default HomePage;
