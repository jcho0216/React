import { createStore } from 'redux';

//리덕스에서 관리 할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
};

//액션타입 정의
//액션타입은 주로 대문자
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 생성함수 정의
//주로 케멀케이스로 지정
function increase () {
    return {
        type: INCREASE //액션 객체에는 type이 필수!
    };
}

//화살표함수 선호
const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text //액션안에 type외에 추가적인 필드를 마음대로 넣을수 있으!
});

const addToList = list => ({
    type: ADD_TO_LIST,
    list
});

//리듀서에서는 불변성을 꼭 지켜줘야한다!
function reducer (state = initialState, action) {
    // state 의 초깃값을 initialState 로 지정했습니다.
    switch (action.type) {
      case INCREASE:
        return {
          ...state,
          counter: state.counter + 1
        };
      case DECREASE:
        return {
          ...state,
          counter: state.counter - 1
        };
      case CHANGE_TEXT:
        return {
          ...state,
          text: action.text
        };
      case ADD_TO_LIST:
        return {
          ...state,
          list: state.list.concat(action.item)
        };
      default:
        return state;
    }
  }

  //스토어 만들기
  const store = createStore(reducer);

  console.log(store.getState());

  const listener = () => {
      const state = store.getState();
      console.log(state);
  }

  const unsubscribe = store.subscribe(listener);

  store.dispatch(increase());
  store.dispatch(decrease());
  store.dispatch(changeText('안녕하세요'));
  store.dispatch(addToList({ id: 1, text: '와우' }));