import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearchResult from './YoutubeSearchResult';
import renderer from 'react-test-renderer';

describe('YoutubeSearchResult Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< YoutubeSearchResult />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const date = '2019-07-19T14:33:47.521Z'
    const tree = renderer
      .create(<YoutubeSearchResult published_at={date} view_count={100}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
