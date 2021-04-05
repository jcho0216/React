import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import * as S from "../styled-components/ContactStyle";
import Aos from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    Aos.init({
        duration: 1000
    });
  })

  return (
    <S.Container>
      <S.H1 data-aos="fade-up"><h1>Contact Me.</h1></S.H1>
      <S.Line />
      <S.Form onSubmit={sendMail} data-aos="fade-up">
        <S.InputContainer>
          <S.Input type="hidden" name="contact_number" />
          <label>Name</label>
          <S.Input type="text" name="user_name" />
          <label>Email</label>
          <S.Input type="email" name="user_email" />
          <label>Message</label>
          <S.TextArea name="message"/>
          <S.Submit type="submit" value="Send" />
        </S.InputContainer>
      </S.Form>
    </S.Container>
  );
};

export default Register;
