import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearchResult from './YoutubeSearchResult';

describe('YoutubeSearchResult Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< YoutubeSearchResult />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
