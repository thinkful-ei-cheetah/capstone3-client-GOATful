import React from 'react';
import ReactDOM from 'react-dom';
import AddVideoForm from './AddVideoForm';

describe('AddVideoForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AddVideoForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
