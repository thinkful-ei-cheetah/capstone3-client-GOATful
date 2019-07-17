import React from 'react';
import ReactDOM from 'react-dom';
import CreatorControls from './CreatorControls';

describe('CreatorControls Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< CreatorControls />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
