import React from "react";
import './newsletter.css';
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";


const Newsletter = () => {
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful traveling information</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder="Enter your email" />
                            <button className="newsletter__btn btn">Subscribe</button>
                        </div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}
export default Newsletter;