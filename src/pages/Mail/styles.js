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
  max-height: 250px;
  justify-items: center;
  justify-content: center;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
  padding: 1% 0.5%;
  padding-bottom: 0.5%;
  border-radius: 4px;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);

`;

export const FromToWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Forms = styled.form`
  font-size: 20px;
  flex: 1;
`;

export const From = styled.div`
  padding: 1% 1%;
  font-size: 20px;
  flex: 1;

  input {
    border: 1px solid rgb(241,101,34);
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 2%;
    min-width: 70%;
  }

`;

export const To = styled.div`
  padding: 1% 1%;
  font-size: 20px;
  flex: 1;

  input {
    border: 1px solid rgb(241,101,34);
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 2%;
    min-width: 91%;
  }

`;

export const Subject = styled.div`
  padding: 1% 1%;
  font-size: 20px;
  flex: 1;

  input {
    border: 1px solid rgb(241,101,34);
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 2%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    min-width: 100%;
  }

`;

export const TextArea = styled.div`
  padding: 1% 1%;
  font-size: 20px;
  flex: 1;

  textarea {
    border: 1px solid rgb(241,101,34);
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 2%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    resize: none;
    min-width: 100%;
  }

`;

export const List = styled.div`
  margin-top: 1%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1000px;
  background-color: #fff;
  color: #333;
  flex: 5;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);
  border-radius: 4px;
  padding: 0.3% 1%;
`;
