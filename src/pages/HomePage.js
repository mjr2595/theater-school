import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import MainSplashImage from "../app/assets/img/main-splash.jpg";

const HomePage = () => {
    return (
        <Container className="text-center">
            <Row>
                <Col className="my-3">
                    <h2>
                        Lights, Camera, <i>Reaction</i>
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col className="my-3">
                    <a role="button" className="btn btn-dark btn-lg" href="/classes">
                        Sign up for a class now!
                    </a>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col className="my-3">
                    <img src={MainSplashImage} className="mx-auto mainSplashImage" alt="main splash" />
                </Col>
            </Row>
        </Container>
    );
};
export default HomePage;
