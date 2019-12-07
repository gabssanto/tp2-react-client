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

  h4 {
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

export const List = styled.div`
  margin-top: 1%;
  margin-right: 2%;
  margin-left: 2%;
  max-width: 1000px;
  background-color: #fff;
  color: #333;
  flex: 5;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);
  border-radius: 4px;
  padding: 0.3% 1%;
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
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 2%;
    min-width: 80%;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
    border: 1px solid #DDDDDD;
  }

  input:focus, textarea:focus {
    box-shadow: 0 0 5px rgb(241,101,34);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgb(241,101,34);
  }
`;

export const To = styled.div`
  padding: 1% 1%;
  font-size: 20px;
  flex: 1;

  input {
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 2%;
    min-width: 91%;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
    border: 1px solid #DDDDDD;
  }

  input:focus, textarea:focus {
    box-shadow: 0 0 5px rgb(241,101,34);
    padding: 10px 15px;
    margin-left: 2%;
    border: 1px solid rgb(241,101,34);
  }

`;

export const Subject = styled.div`
  padding: 1% 1%;
  font-size: 20px;
  flex: 1;

  input {
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 2%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    min-width: 100%;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
    border: 1px solid #DDDDDD;
  }

  input:focus, textarea:focus {
    box-shadow: 0 0 5px rgb(241,101,34);
    padding: 10px 15px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(241,101,34);
  }

`;

export const TextArea = styled.div`
  padding: 1% 1%;
  font-size: 20px;
  flex: 1;

  textarea {
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 2%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    resize: none;
    min-width: 100%;

    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
    border: 1px solid #DDDDDD;
  }

  input:focus, textarea:focus {
    box-shadow: 0 0 5px rgb(241,101,34);
    padding: 10px 15px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(241,101,34);
  }

`;

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  background-color: rgb(241,101,34);
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  min-width: 100%;
  margin-bottom: 1%;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);

  h5 {
    font-size: 20px;
  }

`;
