import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { MdInbox, MdSend, MdAddCircle, MdForward } from "react-icons/md";
import {
  Container,
  Title,
  FromToWrapper,
  To,
  Form,
  SentButton,
  Wrapper,
  ContentSep,
  List,
  WriteButton,
  ReceivedButton,
  From,
  Subject,
  TextArea,
  Forms,
  SubmitButton
} from './styles';

import api from "../../services/api";

class Write extends Component {
  state = {
    session: {},
    mails: [],
    sender: '',
    to: '',
    subject: '',
    text: ''
  }

  handleInboxButton = async e => {
    e.preventDefault();
    this.props.history.push('/inbox');
  }

  handleSentButton = async e => {
    e.preventDefault();
    this.props.history.push('/sent');
  }

  handleTo = e => {
    this.setState({ to: e.target.value });
  }

  handleSubject = e => {
    this.setState({ subject: e.target.value });
  }

  handleText = e => {
    this.setState({ text: e.target.value });
  }

  handleSending = async e => {
    e.preventDefault();

    const { sender, to, subject, text } = this.state;
    const from = sender;
    const response = await api.post('/mail', {
      from, to, subject, text
    })
    console.log(response.data);
    this.props.history.push('/sent')
  }

  async componentDidMount() {
    const session = localStorage.getItem('session');
    const { mails } = this.state;

    if(session) {
      const JsonSession = JSON.parse(session);
      this.setState({ session: JsonSession });
      this.setState({ sender: JsonSession["user"]["email"]})
    }
  }

  render() {
    const { sender, to, subject, text } = this.state;
    return (
      <>
      <Container>
        <Title>meuSS.com</Title>
      </Container>
      <ContentSep>
        <Wrapper>
          <Form>
            <WriteButton>
              <h2>
                <MdAddCircle size={25}/> <p>Write</p>
              </h2>
            </WriteButton>
          </Form>
          <Form onSubmit={this.handleInboxButton}>
            <ReceivedButton>
              <h3>
                <MdInbox size={25}/> <p>Received</p>
              </h3>
            </ReceivedButton>
          </Form>
          <Form onSubmit={this.handleSentButton}>
            <SentButton>
              <h4>
                <MdSend size={25}/> <p>Sent</p>
              </h4>
            </SentButton>
          </Form>
        </Wrapper>
        <List>
          <Forms onSubmit={this.handleSending}>
            <FromToWrapper>
              <From>
                <strong>From:</strong>
                <input
                  type='text'
                  value={sender}
                  disabled
                />
              </From>
              <To>
                <input
                  type='text'
                  placeholder='To'
                  value={to}
                  onChange={this.handleTo}
                />
              </To>
            </FromToWrapper>
            <Subject>
              <input
                type='text'
                placeholder='Subject'
                value={subject}
                onChange={this.handleSubject}
              />
            </Subject>
            <TextArea>
              <textarea
                placeholder='Text'
                value={text}
                rows='20'
                onChange={this.handleText}
              />
            </TextArea>
            <SubmitButton>
              <h5>Send email</h5>
            </SubmitButton>
          </Forms>
        </List>
      </ContentSep>
      </>
    )
  }
}

export default withRouter(Write);
