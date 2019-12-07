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
    text: '',
    mail: {}
  }

  handleWriteButton = async e => {
    e.preventDefault();
    this.props.history.push('/write');
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

  componentDidMount() {
    const mails = localStorage.getItem('mails');

    const parsedMails = JSON.parse(mails);
    parsedMails.map(mail => {
      if(decodeURIComponent(this.props.match.params.id) == mail.id) {
        this.setState({ mail }, () => {
          console.log(this.state);
        });
      }
    })
  }

  render() {
    const { mail } = this.state;
    return (
      <>
      <Container>
        <Title>meuSS.com</Title>
      </Container>
      <ContentSep>
        <Wrapper>
          <Form onSubmit={this.handleWriteButton}>
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
                  value={mail.from}
                  disabled
                />
              </From>
              <To>
              <strong>To:</strong>

                <input
                  type='text'
                  placeholder='To'
                  value={mail.to}
                  disabled
                />
              </To>
            </FromToWrapper>
            <Subject>
              <strong>Subject:</strong>
              <br />
              <input
                type='text'
                placeholder='Subject'
                value={mail.subject}
                disabled
              />
            </Subject>
            <TextArea>
              <strong>Text:</strong>
              <br />
              <textarea
                placeholder='Text'
                value={mail.text}
                rows='20'
                disabled
              />
            </TextArea>
          </Forms>
        </List>
      </ContentSep>
      </>
    )
  }
}

export default withRouter(Write);




/* import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { MdInbox, MdSend, MdAddCircle, MdForward } from "react-icons/md";
import { Container, Title, Form, SentButton, Wrapper, From, FromToWrapper, To, Subject, TextArea, List } from './styles';

class Inbox extends Component {
  state = {
    mail: {}
  }

  componentDidMount() {
    const mails = localStorage.getItem('mails');

    const parsedMails = JSON.parse(mails);
    parsedMails.map(mail => {
      if(decodeURIComponent(this.props.match.params.id) == mail.id) {
        this.setState({ mail }, () => {
          console.log(this.state);
        });
      }
    })
  }

  render() {
    const { mail } = this.state;

    return(
      <>
      <Container>
        <Title>meuSS.com</Title>
      </Container>

      <List>
      <FromToWrapper>


      </List>
      </>
    );
  }
}

export default withRouter(Inbox);
 */
