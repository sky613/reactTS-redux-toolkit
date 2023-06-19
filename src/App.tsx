import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginContainer from "./views/login/containers/LoginContainer";
import ToastMessage from "./components/ToastMessage";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { toastMessageList } = useAppSelector((store) => store.common);

  const dispatch = useDispatch();

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
      </Routes>
      {toastMessageList.map((v, index) => (
        <ToastMessage key={index} />
      ))}
    </div>
  );
}

export default App;
