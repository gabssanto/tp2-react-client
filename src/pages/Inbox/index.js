import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { MdInbox, MdSend, MdAddCircle, MdForward } from "react-icons/md";
import { Container, Title, Form, SentButton, Wrapper, ContentSep, List, WriteButton, ReceivedButton } from './styles';

import api from "../../services/api";

class Inbox extends Component {
  state = {
    session: {},
    mails: []
  }

  handleWriteButton = async e => {
    e.preventDefault();
    this.props.history.push('/write');
  }

  handleSentButton = async e => {
    e.preventDefault();
    this.props.history.push('/sent');
  }

  async componentDidMount() {
    const session = localStorage.getItem('session');
    const { mails } = this.state;

    if(session) {
      const JsonSession = JSON.parse(session);
      this.setState({ session: JsonSession });

      const sent = await api.post('/mailReceiver', {
        to: JsonSession["user"]["email"]
      });
      this.setState({mails: sent.data})
      localStorage.setItem('mails', JSON.stringify(this.state.mails));
      //console.log(this.state);

    }
  }

  render() {
    const { mails } = this.state;
    const mailsReverse = mails.reverse();
    console.log(mails[0]);
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
          <Form>
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
          {mailsReverse.map((mail, index) => (
            <li key={index}>
              <p><strong>Subject:</strong> {mail.subject}</p>
              <p><strong>From:</strong> {mail.from}</p>
              <Link to={`inbox/${encodeURIComponent(mail.id)}`}><MdForward size={25}/></Link>
            </li>
          ))}
        </List>
      </ContentSep>
      </>
    )
  }
}

export default withRouter(Inbox);
