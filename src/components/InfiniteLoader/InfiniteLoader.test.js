import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import InfiniteLoader from './InfiniteLoader';

describe('InfiniteLoader Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< InfiniteLoader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<InfiniteLoader/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})