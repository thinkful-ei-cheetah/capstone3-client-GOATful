import React from 'react';
import ReactDOM from 'react-dom';
import VideosPage from './VideosPage';

describe('VideosPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< VideosPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
