import React, { Component } from "react";
import { Container, Row, Col, Image, Card, ListGroup, Button } from "react-bootstrap";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import ExperienceModal from "./ExperienceModal.jsx";
import ExperiencesPosted from "./ExperiencesPosted";
import ExperienceUpdateForm from "./ExperienceUpdateForm.jsx";


class Experience extends React.Component {
  state = {
    experiences: "",
    modalOpen: false
  };
  setModal = (experience) => {
    if (this.state.modalOpen === true) {
      this.setState({
        modalOpen: false
      });
    } else if (this.state.modalOpen === false) {
      this.setState({
        modalOpen: true

      });
    }
  };
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
          <Row>
          <Col className="mt-3">
            <h3>Experience</h3>
          </Col>
          <Col className="mt-3">
            <FontAwesomeIcon onClick={this.setModal} id="editexperience" icon={faPencilAlt} />
            {this.state.modalOpen && (
              <ExperienceModal setmodal={this.setModal}  open={this.state.modalOpen} />
            )} 
              </Col>
              </Row>
          <Row flex h-100>
            <Col className="md-12 pt-2">
              {this.state.experiences && this.state.experiences.map((experience, index) => (
              <ExperiencesPosted allExp={experience} key={index} />
              ))}
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }

  componentDidMount = async () => {
    const responseExperience = await fetch(
      process.env.REACT_APP_BASE_URL + "/experiences",
      {
        method: "GET",
      });
    const exp = await responseExperience.json();
    this.setState({ experiences: exp });
  };
}
export default Experience;