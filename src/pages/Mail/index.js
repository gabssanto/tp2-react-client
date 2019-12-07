import React, { Component } from 'react';
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

      </List>
      </>
    );
  }
}

export default withRouter(Inbox);
