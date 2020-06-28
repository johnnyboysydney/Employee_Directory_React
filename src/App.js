import React from 'react';
import './CSS/App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <div>
      <Wrapper>
        <Header />
        <br></br>
        <Main />
        <br></br>
      </Wrapper>
    </div>
      <Footer />
    </div>
  );
}

export default App;