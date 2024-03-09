import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import Main from "./pages/Main";

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

export default App;
