import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginContainer from "./views/login/containers/LoginContainer";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
      </Routes>
    </div>
  );
}

export default App;
