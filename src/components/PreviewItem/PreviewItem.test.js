import React from 'react';
import ReactDOM from 'react-dom';
import PreviewItem from './PreviewItem';

describe('PreviewItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< PreviewItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
