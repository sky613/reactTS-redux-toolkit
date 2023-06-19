import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toastMessage } from "../../../components/ToastMessage";
import { useAppSelector } from "../../../redux/hooks";
import { postLogin } from "../redux/slice";

function LoginContainer() {
  const dispatch = useDispatch();
  const [view, setView] = useState(String);
  const { login } = useAppSelector((store) => store.login);
  const loginHandler = () => {
    dispatch(postLogin({}));
  };

  const toastHandler = () => {
    toastMessage("toatMsg");
  };
  useEffect(() => {
    console.log("login", login);
  }, [login]);
  return (
    <>
      LoginContainer
      <button onClick={loginHandler}>login test</button>
      <button onClick={toastHandler}>toastMessage test</button>
    </>
  );
}

export default LoginContainer;
