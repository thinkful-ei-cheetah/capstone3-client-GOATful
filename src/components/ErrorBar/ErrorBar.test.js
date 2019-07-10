import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBar from './ErrorBar';

describe('ErrorBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< ErrorBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
