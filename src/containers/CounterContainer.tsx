import React, { useEffect } from "react";
import Counter from "components/Counter";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../modules/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "modules/hooks";
import { getPost, getPosts } from "modules/posts";
import { PostType } from "modules/posts";
import { getLocals } from "modules/locals";
import { getSites, postSites } from "modules/sites";

function CounterContainer() {
  /**기본형 사용 */
  //   const count = useSelector((state: RootState) => state.counter.value);
  //   const dispatch = useDispatch();

  /**typed versions hook 사용 */
  const count = useAppSelector((state) => state.counter.value); // 여기서 state 인자는 이미 RootState로 타입이 지정되어있다.
  const { data, loading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    // dispatch(getPosts());
    // dispatch(getPost(3));
    dispatch(getSites());
  }, []);

  const dispatch = useAppDispatch();

  const onIncrease = () => {
    dispatch(increment());
  };

  const onDecrease = () => {
    dispatch(decrement());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(incrementByAmount(diff));
  };

  const onGetPosts = () => {
    // dispatch(getPost(4));
    dispatch(
      postSites({
        ts_id: 1,
        ts_index: "SITETEST",
        created_date: new Date(),
        modified_date: null,
        ts_site_name: "오픈웍스",
        ts_title: "동부선1공구",
        te_index: "ENP0001",
        nms_action: 1,
        cctv_action: 1,
        gas_action: 1,
        phone_action: 1,
        wifi_action: 1,
        tts_action: 1,
        sos_action: 1,
        lamp_action: 1,
        ts_role: 1,
      })
    );
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
      onGetPosts={onGetPosts}
      postData={data}
    />
  );
}

export default CounterContainer;
