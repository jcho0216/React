import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, ToggleTodo} from '../modules/todos';

function TodosContainer() {
    //useSelector에서 꼭 객체를 반환할 필요는 없습니다.
    //한 종류의 값만 조회하고 싶으면 그냥 원하는값 반환 
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(ToggleTodo(id)), [dispatch]);

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}  

export default TodosContainer;