import { RecoilRoot } from "recoil";
import Main from "./pages/Main";
import Header from "./components/Header";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Main />
    </RecoilRoot>
  );
}

export default App;
