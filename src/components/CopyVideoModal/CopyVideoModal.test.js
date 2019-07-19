import React from 'react';
import ReactDOM from 'react-dom';
import CopyVideoModal from './CopyVideoModal';
import renderer from 'react-test-renderer';

describe('CopyVideoModal Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< CopyVideoModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<CopyVideoModal/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
