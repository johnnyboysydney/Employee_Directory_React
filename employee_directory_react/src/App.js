import React from 'react';
import './CSS/App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <br></br>
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;