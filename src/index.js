import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// ReactDOM.render() 메서드를 사용하여 React 애플리케이션을 렌더링함
// 첫 번째 매개변수: 렌더링할 React 엘리먼트(컴포넌트)를 전달함
// 두 번째 매개변수: 해당 엘리먼트를 렌더링할 DOM 요소를 지정함
ReactDOM.render(<App />, document.getElementById("root"));
