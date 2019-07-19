import React from 'react';
import ReactDOM from 'react-dom';
import CreatorPreview from './CreatorPreview';
import renderer from 'react-test-renderer';

describe('CreatorPreview Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< CreatorPreview />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<CreatorPreview/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
