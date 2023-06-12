import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { postLogin } from "../redux/slice";

function LoginContainer() {
  const dispatch = useDispatch();
  const [view, setView] = useState(String);
  const { login } = useAppSelector((store) => store.login);
  const loginHandler = () => {
    dispatch(postLogin({}));
  };
  useEffect(() => {
    console.log("login", login);
  }, [login]);
  return (
    <>
      LoginContainer
      <button onClick={loginHandler}>login test</button>
    </>
  );
}

export default LoginContainer;
