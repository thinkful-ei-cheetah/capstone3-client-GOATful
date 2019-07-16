import React from 'react';
import ReactDOM from 'react-dom';
import AddVideoModal from './AddVideoModal';

describe('AddVideoModal Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AddVideoModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
