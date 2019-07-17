import React from 'react';
import ReactDOM from 'react-dom';
import VideoItem from './VideoItem';
import { BrowserRouter } from 'react-router-dom'

describe('VideoItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        < VideoItem />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
