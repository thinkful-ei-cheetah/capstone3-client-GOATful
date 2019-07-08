import React from 'react';
import ReactDOM from 'react-dom';
import CreatorPreview from './CreatorPreview';

describe('CreatorPreview Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< CreatorPreview />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
