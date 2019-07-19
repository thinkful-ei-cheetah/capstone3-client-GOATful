import React from 'react';
import ReactDOM from 'react-dom';
import DeleteVideoModal from './DeleteVideoModal';
import renderer from 'react-test-renderer';


describe('DeleteVideoModal Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< DeleteVideoModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<DeleteVideoModal/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
