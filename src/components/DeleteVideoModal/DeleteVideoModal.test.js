import React from 'react';
import ReactDOM from 'react-dom';
import DeleteVideoModal from './DeleteVideoModal';

describe('DeleteVideoModal Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< DeleteVideoModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
