import styled from 'styled-components';
// import dd from '../../1_images/footer.png';

export const Container = styled.div`
    height: 100vh;
    /* background-image: url("../../1_images/footer.png"); */
    background-color: beige;
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

`;

export const TextArea = styled.textarea`
    margin-top: 15px;
    width: 559px;
    height: 200px;
    padding: 20px;
`;

export const H1 = styled.h1`
    margin: 0;
    position: relative;
    left: 500px;
    top: 40px;
    
`;

export const Form = styled.form`

`;