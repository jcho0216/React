import React from "react";
import emailjs, { sendForm } from "emailjs-com";
import * as S from "../styled-components/ContactStyle";

const Register = () => {
  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xa4fuvg",
        "template_a14g0nj",
        e.target,
        "user_5Ko0D3qNYp3K6crpmnPKG"
      )
      .then(
        (result) => {
          alert("이메일 보내기 성공!!");
        },
        (error) => {
          alert("에러가 났어요 ㅠㅠ");
        }
      );
  };

  return (
    <S.Container>
      <S.H1>Contact Me.</S.H1>
      <S.Form onSubmit={sendMail}>
        <S.InputContainer>
          <S.Input type="hidden" name="contact_number" />
          <label>Name</label>
          <S.Input type="text" name="user_name" />
          <label>Email</label>
          <S.Input type="email" name="user_email" />
          <label>Message</label>
          <S.TextArea name="message"/>
          <S.Input type="submit" value="Send" />
        </S.InputContainer>
      </S.Form>
    </S.Container>
  );
};

export default Register;
