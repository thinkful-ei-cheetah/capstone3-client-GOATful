import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AddVideoPage from './AddVideoPage';

describe('AddVideoPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AddVideoPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddVideoPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})