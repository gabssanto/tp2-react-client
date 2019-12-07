import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'

import { Container, Title, Form, SubmitButton, RegisterButton, FormSignup } from './styles';

import api from "../../services/api";

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;

    const response = await api.post('/users', {
      name, email, password
    });

    this.props.history.push('/');
  }

  render () {
    const { name, email, password } = this.state;

    return(
      <Container>
        <Title>meuSS.com</Title>
        <Form onSubmit={this.handleSubmit}>
        <input
            placeholder='name'
            type='text'
            value={name}
            onChange={this.handleNameChange}
          />
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
            <h2>Create Account</h2>
          </SubmitButton>
        </Form>
      </Container>
      );
    };
}

export default withRouter(Register);
