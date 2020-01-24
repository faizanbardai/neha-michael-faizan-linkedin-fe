import React, { Component } from "react";
import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";
import Moment from "react-moment";
import Experiences from "./Experiences";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileCsv } from "@fortawesome/free-solid-svg-icons";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: [] };
  }
  handleDownload = type => {
    type === "pdf" ? console.log("pdf") : console.log("csv");
  };
  render() {
    const {
      imageProfile,
      name,
      surname,
      email,
      bio,
      title,
      area,
      createdAt,
      experiences,
      username
    } = this.state.profile;
    return (
      <div>
        <Container>
          <Container></Container>
          <Row className="my-2">
            <Col xs={12} md={3}>
              <Image
                roundedCircle
                src={imageProfile}
                className="p-4"
                style={{ width: "100%" }}
              />
              <Card>
                <Card.Body>
                  <Card.Title>{name + " " + surname}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{title}</ListGroup.Item>
                    <ListGroup.Item>{area}</ListGroup.Item>
                    <ListGroup.Item>{email}</ListGroup.Item>
                    <ListGroup.Item>{bio}</ListGroup.Item>
                    <ListGroup.Item>
                      User since:{" "}
                      <Moment toNow ago>
                        {createdAt}
                      </Moment>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={9}>
              <Row className="d-flex justify-content-end">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={
                    process.env.REACT_APP_BASE_URL +
                    "/profiles/" +
                    username +
                    "/CV"
                  }
                  className="m-2 btn btn-outline-dark"
                >
                  Profile <FontAwesomeIcon icon={faFilePdf} />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="m-2 btn btn-outline-dark"
                  href={
                    process.env.REACT_APP_BASE_URL +
                    "/experiences/" +
                    username +
                    "/csv"
                  }
                >
                  Experiences <FontAwesomeIcon icon={faFileCsv} />
                </a>
              </Row>
              {experiences &&
                experiences.map(experience => (
                  <Experiences key={experience._id} experience={experience} />
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  componentDidMount = async () => {
    const { username } = this.props.match.params;
    const responsePosts = await fetch(
      process.env.REACT_APP_BASE_URL + "/profiles/" + username
    );
    const profile = await responsePosts.json();
    this.setState({ profile });
  };
}
