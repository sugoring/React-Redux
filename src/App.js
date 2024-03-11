import React, { useState } from 'react';
import './App.css';

// App 컴포넌트 정의
export default function App() {
  // number 상태와 해당 값을 업데이트하는 setNumber 함수를 생성
  const [number, setNumber] = useState(1);

  return (
    <div id="container">
      {/* Root 컴포넌트 */}
      <h1>Root : {number}</h1>
      {/* grid 컨테이너 */}
      <div id="grid">
        {/* Left1 컴포넌트 */}
        <Left1></Left1>
        {/* Right1 컴포넌트 */}
        <Right1></Right1>
      </div>
    </div>
  );
}

// Left1 컴포넌트 정의
function Left1(props) {
  return (
    <div>
      {/* Left1 헤딩 */}
      <h1>Left1 </h1>
      {/* Left2 컴포넌트 */}
      <Left2></Left2>
    </div>
  );
}

// Left2 컴포넌트 정의
function Left2(props) {
  return (
    <div>
      {/* Left2 헤딩 */}
      <h1>Left2 : </h1>
      {/* Left3 컴포넌트 */}
      <Left3></Left3>
    </div>
  );
}

// Left3 컴포넌트 정의
function Left3(props) {
  return (
    <div>
      {/* Left3 헤딩 */}
      <h1>Left3 : </h1>
    </div>
  );
}

// Right1 컴포넌트 정의
function Right1(props) {
  return (
    <div>
      {/* Right1 헤딩 */}
      <h1>Right1</h1>
      {/* Right2 컴포넌트 */}
      <Right2></Right2>
    </div>
  );
}

// Right2 컴포넌트 정의
function Right2(props) {
  return (
    <div>
      {/* Right2 헤딩 */}
      <h1>Right2</h1>
      {/* Right3 컴포넌트 */}
      <Right3></Right3>
    </div>
  );
}

// Right3 컴포넌트 정의
function Right3(props) {
  return (
    <div>
      {/* Right3 헤딩 */}
      <h1>Right3</h1>
      {/* "+" 버튼 */}
      <input type="button" value="+" onClick={() => {}}></input>
    </div>
  );
}
