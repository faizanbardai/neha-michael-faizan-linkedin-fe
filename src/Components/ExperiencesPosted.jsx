import React from 'react';

class ExperiencesPosted extends React.Component {
    state = {
      isDeleted: false,

    }
    delete = async()=>{
    const responseExperience = await fetch(
        process.env.REACT_APP_BASE_URL + "/experiences" + this.props.Exp._id,
        {
          method: "DELETE",
        });
      const exp = await responseExperience.json();
      this.setState({ isDeleted: true });
    };

    render() {
    
        return this.state.isDeleted !=true ? (
        <div className="userexperiences mt-5">
        <ul className="explist">
          <li>{this.props.allExp.company}</li>
          <li>{this.props.allExp.role}</li>
          <li>{this.props.allExp.startDate}</li>
          <li>{this.props.allExp.description}</li>
          <li>{this.props.allExp.area}</li>
        </ul>
        <div className="ml-4">
          <button id="deleteexperience" onClick={this.delete}>Delete</button>
        </div>
      </div>
        ) : (<div>Your Post was Deleted!</div>)
        
}

}


export default ExperiencesPosted;