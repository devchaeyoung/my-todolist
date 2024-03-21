import { RecoilRoot } from "recoil";
import Headers from "./components/Header";
import Main from "./pages/Main";

import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Headers />
      <Main />
    </RecoilRoot>
  );
}

export default App;
