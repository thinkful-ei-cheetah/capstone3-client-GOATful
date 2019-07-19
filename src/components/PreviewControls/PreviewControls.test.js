import React from 'react';
import ReactDOM from 'react-dom';
import PreviewControls from './PreviewControls';
import renderer from 'react-test-renderer';


describe('PreviewControls Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< PreviewControls />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<PreviewControls/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
