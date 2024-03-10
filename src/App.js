import "./App.css";
import { RecoilRoot } from "recoil";
import Main from "./pages/Main";
import Header from "./components/Header";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: #ffefd5;
  color: #444343;
`;

function App() {
  return (
    <Wrapper>
      <RecoilRoot>
        <Header />
        <Main />
      </RecoilRoot>
    </Wrapper>
  );
}

export default App;
