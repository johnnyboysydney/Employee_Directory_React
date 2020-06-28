import React from 'react';
import ReactDOM from 'react-dom';
import Links from "../components/Links";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Links />, div);
  });