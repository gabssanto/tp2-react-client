import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { MdInbox, MdSend, MdAddCircle, MdForward } from "react-icons/md";
import { Container, Title, Form, SentButton, Wrapper, ContentSep, List, WriteButton, ReceivedButton } from './styles';

import api from "../../services/api";

class Sent extends Component {
  state = {
    session: {},
    mails: []
  }

  handleWriteButton = async e => {
    e.preventDefault();
    this.props.history.push('/write');
  }

  handleInboxButton = async e => {
    e.preventDefault();
    this.props.history.push('/inbox')
  }

  async componentDidMount() {
    const session = localStorage.getItem('session');
    const { mails } = this.state;

    if(session) {
      const JsonSession = JSON.parse(session);
      this.setState({ session: JsonSession });

      const sent = await api.post('/mailSender', {
        from: JsonSession["user"]["email"]
      });
      this.setState({mails: sent.data})
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
          <Form onSubmit={this.handleInboxButton}>
            <ReceivedButton>
              <h3>
                <MdInbox size={25}/> <p>Received</p>
              </h3>
            </ReceivedButton>
          </Form>
          <Form>
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
              <p><strong>To:</strong> {mail.to}</p>
              <Link to={`sent/${encodeURIComponent(mail.id)}`}><MdForward size={25}/></Link>
            </li>
          ))}
        </List>
      </ContentSep>
      </>
    )
  }
}

export default withRouter(Sent);
