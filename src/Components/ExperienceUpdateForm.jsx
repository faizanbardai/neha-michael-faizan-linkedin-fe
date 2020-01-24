import React from "react";
import { Form, FormGroup, Label, Input} from "reactstrap";

class ExperienceUpdateForm extends React.Component {
  state = {
    experiences: "",
    closeModal: false,
    isSubmitted: false,
    formData: {}
  };
  updateObj = ev => {
    let input = ev.target.value;
    let idInput = ev.target.id;
    let newFormData = this.state.formData;
    newFormData[ev.target.id] = ev.target.value;
    this.setState({ formData: newFormData})
    console.log(this.state);
  };

  handleSubmit = async event => {
    event.preventDefault();
    let response = await fetch(
      "https://linkedin-neha-michael-fayju.herokuapp.com/experiences",
      {
        method: "POST",
        body: JSON.stringify(this.state.formData),
    );
    this.setState({closeModal: true})
  };
  
  render() {
    return (
      <div className="modal-div">
        <div className="flex md-4 mr-5">
          <img
            className="modal-bg"
            src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
            alt="linkedIn background"
          ></img>
        </div>
        <Form className="update-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="Company">Company</Label>
            <Input
              type="text"
              onChange={this.updateObj}
              name="password"
              id="company"
              placeholder="Name of Company"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Role">Role</Label>
            <Input
              type="email"
              onChange={this.updateObj}
              name="email"
              id="role"
              placeholder="Role in the company"
            />
          </FormGroup>
          <FormGroup>
            <Label for="StartDAte">Start Date</Label>
            <Input
              type="date"
              onChange={this.updateObj}
              name="password"
              id="startDate"
              placeholder="Date you started"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Description">Description</Label>
            <Input
              type="text"
              onChange={this.updateObj}
              name="password"
              id="description"
              placeholder="Briefly describe your role"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Area">Area</Label>
            <Input
              type="text"
              onChange={this.updateObj}
              name="password"
              id="area"
              placeholder="Location of employment"
            />
          </FormGroup>
          <Input
            id="submitBtn"
            type="submit"
            className="btn btn-success"
            value="Submit"
            onClick={this.handleSubmit}
          />
          <FormGroup>
          <Input
                  id="exitBtn"
                  type="exit"
                  class="btn btn-danger"
                  value="Exit"
                  onClick={this.props.closeModal}
              />
              </FormGroup>
        </Form>
      </div>
    );
  }
 }

export default ExperienceUpdateForm;