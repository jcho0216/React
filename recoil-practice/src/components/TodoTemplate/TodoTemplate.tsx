import React from 'react';
import * as S from './styles';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import TodoTitle from '../TodoTitle/TodoTitle';

const TodoTemplate = (): JSX.Element => {
    return (
        <S.TodoTemplateContainer>
            <S.Contents>
                <TodoTitle />
                <TodoList />
                {/* <TodoInput /> */}
            </S.Contents>
        </S.TodoTemplateContainer>
    )
}

export default TodoTemplate;