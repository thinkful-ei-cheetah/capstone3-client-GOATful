import React from 'react';
import ReactDOM from 'react-dom';
import VideosPage from './VideosPage';
import renderer from 'react-test-renderer';


describe('VideosPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< VideosPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<VideosPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
