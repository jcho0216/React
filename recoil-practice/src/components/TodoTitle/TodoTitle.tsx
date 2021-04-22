import React from "react";
import { GiWireCoil } from "react-icons/gi";
import * as S from "./styles";
const TodoTitle = ():JSX.Element => {

  return (
    <S.TodoTitle>
      <S.TitleIcon>
        <S.TodoTitleTitle>TodoList With Recoil</S.TodoTitleTitle>
      </S.TitleIcon>
    </S.TodoTitle>
  )
};
export default TodoTitle;
