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
  flex: 1;
  max-height: 250px;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  max-width: 300px;
  margin-left: 1%;
  margin-top: 1%;
  padding: 0 0.5%;
  padding-bottom: 0.5%;
  border-radius: 4px;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);

`;

export const ContentSep = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 6%;
  display: flex;
  flex:1;
  flex-direction: column;
`;

export const WriteButton = styled.button.attrs({
  type: 'submit'
})`
  margin-bottom: 1%;
  margin-right: 2%;
  margin-left: 2%;
  background-color: rgb(241,101,34);
  color: #fff;
  border: 2px solid #fff;
  padding: 15px 0;
  border-radius: 4px;

  h2 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
      margin-left: 2%;
    }
  }

`;

export const ReceivedButton = styled.button.attrs({
  type: 'submit'
})`
  margin-bottom: 1%;
  margin-right: 2%;
  margin-left: 2%;
  border: 2px solid #fff;
  padding: 15px 0;
  border-radius: 4px;

  h3 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
      margin-left: 2%;
    }
  }
`;

export const SentButton = styled.button.attrs({
  type: 'submit'
})`
  margin-bottom: 1%;
  margin-right: 2%;
  margin-left: 2%;
  border: 2px solid #fff;
  padding: 15px 0;
  border-radius: 4px;
  border: 2px solid rgb(241,101,34);

  h4 {
    color: rgb(241,101,34);
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
      margin-left: 2%;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 1%;
  margin-right: 2%;
  margin-left: 2%;
  max-width: 1000px;
  background-color: #fff;
  color: #999;
  flex: 5;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);
  border-radius: 4px;
  padding: 0.3% 1%;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
    p {
      min-width: 40%;
    }
    a {
      color: rgb(241,101,34);
      text-decoration: none;
      size: 20px;
    }
  }
`;
