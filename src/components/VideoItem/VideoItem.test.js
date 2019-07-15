import React from 'react';
import ReactDOM from 'react-dom';
import VideoItem from './VideoItem';

describe('VideoItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< VideoItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
