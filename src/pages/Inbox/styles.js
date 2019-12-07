import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  padding: 1% 0.5%;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);

  h2, h3, h4 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h3 {
    color: rgb(241,101,34);
  }
`;

export const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Merienda+One&display=swap');
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  color: rgb(241,101,34);
  font-family: 'Merienda One', cursive;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  margin-left: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
  padding: 1% 0.5%;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);

`;

export const ContentSep = styled.div`
  display:flex;
  flex-direction: row;
`;

export const SentForm = styled.form`
  margin-top: 6%;
  display: flex;
  flex-direction: column;
`;

export const SentButton = styled.button.attrs({
  type: 'submit'
})`
  margin-bottom: 1%;
  margin-right: 2%;
  margin-left: 2%;
  background-color: rgb(241,101,34);
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 0;
  border-radius: 4px;
`;
