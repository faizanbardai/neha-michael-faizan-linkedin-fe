import React, { Component } from "react";
import { Container, Row, Col, Image, Card, ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class SinglePost extends Component {
  render() {
    const { imagePost, text } = this.props.post;
    const { username, imageProfile, name, surname } = this.props.post.profileID[0];
    return (
        <Container>
          <Row className="mb-2">
            <Col xs={12} sm={6}>
              <Image src={imagePost} rounded style={{ width: "100%" }} />
            </Col>
            <Col xs={12} sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <Image
                      src={imageProfile}
                      roundedCircle
                      style={{ width: "40px", height: "40px" }}
                    />{" "}
                    <Link to={"/profile/" + username}>
                      <Button variant="outline-dark">
                        {name} {surname}
                      </Button>
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    {text.length > 200
                      ? text.substring(0, 200) + "..."
                      : text}
                  </Card.Text>
                </Card.Body>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary">Like</Button>
                  <Button variant="secondary">Comment</Button>
                  <Button variant="secondary">Share</Button>
                </ButtonGroup>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}
