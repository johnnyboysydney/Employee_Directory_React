import React, {Component} from 'react';
import logo from '../public/img/logo.jpg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    employees: [],
    employeesForDisplay: [],
    searchKeyword: "",
    sortNameAsc: true,
    sortEmailAsc: true,
    sortDOBAsc: true,
    sortPhoneAsc: true
  }

  render (){
    return (
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    )
  }
}

export default App;
