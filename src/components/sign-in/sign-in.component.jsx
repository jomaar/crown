import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value }); //destructure array ?
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Ich habe schon einen Account</h2>
        <span>Melde Dich mit Email-Adresse und Passwort an</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Passwort"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Anmelden </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Mit Google anmelden
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
