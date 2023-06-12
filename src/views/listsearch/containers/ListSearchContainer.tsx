import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import {
  decrement,
  getListMgt,
  increment,
  incrementByAmount,
} from "../redux/slice";

function TestContainer() {
  const dispatch = useDispatch();
  const [view, setView] = useState(String);
  const { list, value } = useAppSelector((store) => store.listMgt);
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const incrementByAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(incrementByAmount(Number(e.target.value)));
  };
  const getListMgtHandler = () => {
    dispatch(getListMgt({}));
  };
  useEffect(() => {
    console.log("list", list);
    if (list.status === "success") {
      setView("111");
    }
  }, [list]);
  return (
    <div>
      TestContainer
      {view && view}
      <button onClick={getListMgtHandler}>listBtn</button>
      <br />
      {value}
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <input type="text" onChange={incrementByAmountHandler} />
    </div>
  );
}

export default TestContainer;
