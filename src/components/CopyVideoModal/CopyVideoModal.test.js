import React from 'react';
import ReactDOM from 'react-dom';
import CopyVideoModal from './CopyVideoModal';

describe('CopyVideoModal Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< CopyVideoModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
