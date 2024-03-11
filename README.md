# React-Redux Learning
React Redux 학습을 기록하는 레퍼지토리

# [Redux](https://react-redux.js.org/)
![React-Redux](https://miro.medium.com/v2/resize:fit:750/format:webp/0*dVLS5HUC6uu9MCwa.png)
- 상태 관리를 중앙에서 처리할 수 있음
- 따라서, 개발의 복잡성을 낮출 수 있음

## 설치 방법(Installation):
- `npm i react-redux`
- `npm install redux`

## 주요 기능
- **Provider:** Redux store를 React 컴포넌트에 연결하기 위한 컴포넌트, 최상위에 위치시켜 모든 컴포넌트가 store에 접근할 수 있도록 함
- **useSelector:** Redux store의 state를 읽기 위한 Hook, state를 선택하여 컴포넌트 내에서 사용함
- **useDispatch:** Redux store의 state를 변경하는 action을 디스패치하기 위한 Hook, action을 통해 state를 업데이트함


### 핵심 개념
- **Reducer:** action에 응답하여 state의 변화를 기술하는 순수 함수, state 변화 로직을 담당함
- **Actions:** 어떤 변화가 일어나야 할지 나타내는 객체, state 업데이트를 위해 Reducer에 전달함

--------
## Learning Log
### 2024-03-11
- Redux의 이점
- Provider`, `useSelector`, `useDispatch`의 기능 및 사용 방법

### Additional Topics 
- Redux vs React-Redux 차이점

