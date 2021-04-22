import React, { useCallback } from "react";
import * as S from './styles';
const TodoList = ():JSX.Element => {
    return (
        <S.TodoList>
            <S.NoList>
                Todo가 없습니다. 자유롭게 추가해보세요!
            </S.NoList>
        </S.TodoList>
    )
}

export default TodoList;