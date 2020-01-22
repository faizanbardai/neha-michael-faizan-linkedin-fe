import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class SinglePost extends Component {
  render() {
    const { text } = this.props.post;
    const { name, surname } = this.props.profile;
    const profileImg = this.props.profile.image;
    const postImg = this.props.post.image;
    return (
      <div>
        <Container>
          <Row className="mb-2">
            <Col xs={12} sm={6}>
              <Image src={postImg} rounded style={{ width: "100%" }} />
            </Col>
            <Col xs={12} sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title>
                  <Image src={profileImg} roundedCircle style={{ width: "40px", height:"40px" }} /> {name} {surname}
                  </Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>

                <Card.Body>
                  <Button>Profile</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
