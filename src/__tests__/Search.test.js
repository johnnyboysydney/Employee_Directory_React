import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/Search'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
  });

it('renders without crashing', () => {
    const div = document.createElement('input');
    ReactDOM.render(<Search />, div);
  });
  
  