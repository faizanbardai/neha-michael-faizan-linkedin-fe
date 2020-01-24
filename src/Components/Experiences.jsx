import React, { Component } from "react";
import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";
import Moment from "react-moment";

export default class Experiences extends Component {
  render() {
    const {
      imageExperience,
      startDate,
      endDate,
      company,
      role
    } = this.props.experience;
    return (
      <Container>
        <Row className="mb-2">
          <Col xs={12} sm={3}>
            <Image src={imageExperience} rounded style={{ width: "100%" }} />
          </Col>
          <Col xs={12} sm={9}>
            <Card>
              <Card.Body>
                <Card.Title>{company}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Moment duration={startDate} date={endDate} />
                  </ListGroup.Item>
                  <ListGroup.Item>{role}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
