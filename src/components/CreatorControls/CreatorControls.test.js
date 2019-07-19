import React from 'react';
import ReactDOM from 'react-dom';
import CreatorControls from './CreatorControls';
import renderer from 'react-test-renderer';

describe('CreatorControls Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< CreatorControls />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<CreatorControls/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
