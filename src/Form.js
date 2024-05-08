// write handling form and user input in ReactJs

import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',       


    };
  }
  
  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  } 

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

}

export default Form;

  
