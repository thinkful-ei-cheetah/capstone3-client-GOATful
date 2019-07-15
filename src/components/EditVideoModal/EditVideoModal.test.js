import React from 'react';
import ReactDOM from 'react-dom';
import EditVideoModal from './EditVideoModal';

describe('EditVideoModal Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< EditVideoModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
