import React from 'react';
import ReactDOM from 'react-dom';
import DataArea from '../components/Main';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DataArea />, div);
  });
  