import React, { useState } from 'react';
import './App.css'; 
import { createStore } from 'redux'; 
import { Provider, useSelector, useDispatch} from 'react-redux';

// state을 관리하는 reduce 함수
function reducer(currentState, action) { // 어떤 요청을 받을 것인지에 관한 action
  if (currentState === undefined) { // state가 정의 되지 않았다면, 1을 반환함
    return {
      number: 1, // 초기값 설정
    };
  }
  const newState = { ...currentState }; // 과거의 state를 복제하면, 불변성 유지 가능
  if (action.type === 'PLUS') { // action의 type이 PLUS인 경우
    newState.number++; 
  }
  return newState;
}

const store = createStore(reducer);  // Redux store 생성

// App 컴포넌트
export default function App() {
  return (
    <div id="container"> 
      <h1>react-redux</h1>
      <div id="grid"> 
        <Provider store={store}> 
          <Left1></Left1> 
          <Right1></Right1> 
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1> 
      <Left2></Left2> 
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  console.log('3'); // 콘솔에 메시지 출력
  const number = useSelector((state) => state.number); // useSelector를 사용하여 함수로 인자를 받음
  return (
    <div>
      <h1>Left3 : {number}</h1> {/* 전역 number를 출력 */}
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1> 
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1> 
      <Right3></Right3> 
    </div>
  );
}

function Right3(props) {
  const dispatch = useDispatch(); // useDispatch는 state의 값을 변경함
  return (
    <div>
      <h1>Right3 : </h1> 
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' }); // 버튼 클릭 시 action 디스패치
        }}
      ></input> 
    </div>
  );
}
