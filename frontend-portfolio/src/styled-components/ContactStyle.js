import styled from 'styled-components';
// import dd from '../../1_images/footer.png';

export const Container = styled.div`
    height: 100vh;
    background-color: #FFFFF1;
    font-family: "Inconsolata", monospace;
`;

export const InputContainer = styled.div`
    display: flex;
    margin: 100px auto;
    flex-direction: column;
    width: 600px;

`;

export const Input = styled.input`
    margin: 10px 0; 
    padding: 0 20px;
    height: 60px;
    font-size: 25px;
    border: dotted grey 1px;
    outline: none;

`;

export const TextArea = styled.textarea`
    margin-top: 15px;
    width: 559px;
    height: 200px;
    padding: 20px;
    font-size: 30px;
    border: dotted grey 1px;
    outline: none;
    
`;

export const H1 = styled.div`
    display: flex;
    h1 {
        color: grey;
        margin: 120px auto 0 auto;
        font-size: 40px;
    }
    
`;

export const Form = styled.form`

`;

export const Line = styled.div`
    background-color: #E0E3DA;
    width: 600px;
    border-radius: 20px;
    height: 3px;
    display: flex;
    margin: 80px auto 0 auto;
`;

export const Submit = styled.input`
    background-color: #E0E3DA;
    width: 200px;
    height: 40px;
    margin: 0 auto;
    margin-top: 35px;
    font-family: "Inconsolata", monospace;
    color: white;
    font-size: 20px;
    background-color: #EC7357;
    border: none;
    outline: none;
`;