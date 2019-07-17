import React from 'react';
import ReactDOM from 'react-dom';
import AddVideoPage from './AddVideoPage';

describe('AddVideoPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AddVideoPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
