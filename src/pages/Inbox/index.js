import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { MdInbox, MdSend, MdAddCircle } from "react-icons/md";
import { Container, Title, SentForm, SentButton, Wrapper, ContentSep } from './styles';

import api from "../../services/api";

class Inbox extends Component {
  render() {
    return (
      <>
      <Container>
        <Title>meuSS.com</Title>
      </Container>
      <ContentSep>
        <Wrapper>
          <h2>
            <MdAddCircle /> Write
          </h2>
          <h3>
            <MdInbox /> Receiveded
          </h3>
          <SentForm>
            <SentButton>
              <h4>
                <MdSend /> Sent
              </h4>
            </SentButton>
          </SentForm>
        </Wrapper>
      </ContentSep>
      </>
    )
  }
}

export default withRouter(Inbox);
