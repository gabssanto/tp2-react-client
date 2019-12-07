import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Container, Title, Form, SubmitButton, RegisterButton, FormSignup } from './styles';
import api from "../../services/api";


// import { Container } from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    const response = await api.post('/sessions', {
      email, password
    });
    localStorage.setItem('session', JSON.stringify(response.data));
    this.props.history.push('/inbox');
  }

  handleSignup = e => {
    e.preventDefault();
    this.props.history.push('/register')
  }

  render () {
    const { email, password } = this.state;

    return(
      <Container>
        <Title>meuSS.com</Title>
        <Form onSubmit={this.handleSubmit}>
          <input
            placeholder='email'
            type='text'
            value={email}
            onChange={this.handleEmailChange}
          />
          <input
            placeholder='password'
            type='password'
            value={password}
            onChange={this.handlePasswordChange}
          />
          <SubmitButton>
            <h2>Enter</h2>
          </SubmitButton>
        </Form>
        <FormSignup onSubmit={this.handleSignup}>
          <RegisterButton>
            <h3>Register</h3>
          </RegisterButton>
        </FormSignup>
      </Container>
      );
    };
}

export default withRouter(Login);
