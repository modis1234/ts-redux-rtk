import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// 초기 값의 타입 정의
export interface CounterState {
  value: number;
}

// 초기 값 선언
const initialState: CounterState = {
  value: 0,
};

// slice 생성
export const counterSlice = createSlice({
  name: "counter", // slice 이름 정의
  initialState, // 초기값
  reducers: {
    // 리듀서. 여러 개 기입 가능
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // RTK에서는 action에 PayloadAction<T>를 타입으로 사용해야한다.
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// 각각의 리듀서의 액션을 생성
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// slice를 내보냄
export default counterSlice.reducer;

/**
 *  @description
 * createSlice로 slice를 생성한다.
    Redux를 사용할 때는 액션 함수, 액션 타입, 리듀서(Reducer), 초기 상태 등을 나눠서 만들었는데, 
    RTK에서는 액션 함수, 액션 타입, 리듀서가 합쳐진 모양이다.
    리듀서 내부에서 타입을 사용해서 switch문으로 case를 나눠 사용했던 것들이 굉장히 간소화되었다.
 * */
