import { PostType } from "modules/posts";
import React from "react";

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
  onGetPosts: () => void;
  postData: PostType[];
};

export default function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
  onGetPosts,
  postData,
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
      <button onClick={onGetPosts}>getPosts</button>
    </div>
  );
}
