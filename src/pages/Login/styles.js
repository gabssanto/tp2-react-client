import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  max-width: 600px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  border-radius: 10px;
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
  margin-top: 3%;
`;

export const Form = styled.form`
  margin-top: 6%;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 2%;
  }

  h2 {
    font-size: 20px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  margin-bottom: 1%;
  margin-right: 2%;
  margin-left: 2%;
  background-color: rgb(241,101,34);
  color: #fff;
  border: 0;
  padding: 10px 0;
  border-radius: 4px;
`;

export const FormSignup = styled.form`
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    border: 1px solid rgb(241,101,34);
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 2%;
  }
`;

export const RegisterButton = styled.button.attrs({
  type: 'submit'
})`
  margin-bottom: 1%;
  margin-right: 2%;
  margin-left: 2%;
  background-color: #fff;
  color: rgb(241,101,34);
  border: 2px solid rgb(241,101,34);
  padding: 10px 0;
  border-radius: 4px;

  h3 {
    font-size: 20px;
  }
`;
