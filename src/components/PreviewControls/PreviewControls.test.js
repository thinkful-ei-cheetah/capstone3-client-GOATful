import React from 'react';
import ReactDOM from 'react-dom';
import PreviewControls from './PreviewControls';

describe('PreviewControls Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< PreviewControls />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
