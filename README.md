- 설치

  - `$ npx create-react-app ts-redux-rtx-tutorial --template typescript`

- 단계

  1. Redux store 생성
  2. Redux에 Store 제공
  3. Redux state slice 생성
  4. store에 3번에서 생성한 Slice Reducers 추가
  5. useDispatch, useSelector를 통한 Redux state와 actions 사용

- Redux Toolkit, redux 설치
  - `$ npm install @reduxjs/tookit react-redux`

## 추가. createAsyncThunk(비동기 통신)

Redux에서는 비동기 통신을 진행하기 위해서 redux-thunk 미들웨어를 사용했다.
RTK에서는 별다른 미들웨어 설치없이 비동기 통신을 구현할 수 있다.
바로 createAsyncThunk()를 사용하는 것이다.

[참고] [Typescript] React + Redux toolkit(ft. axios 등등 활용)
https://velog.io/@rkio/Typescript-React-Redux-toolkitft.-axios-%EB%93%B1%EB%93%B1-%ED%99%9C%EC%9A%A9#%EB%AC%B8%EC%A0%9C-%EC%83%81%ED%99%A9

https://duckgugong.tistory.com/323

https://blog.logrocket.com/using-redux-toolkits-createasyncthunk/

[API 데이터] https://jsonplaceholder.typicode.com/posts
