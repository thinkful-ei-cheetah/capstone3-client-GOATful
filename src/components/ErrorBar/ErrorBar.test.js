import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBar from './ErrorBar';
import renderer from 'react-test-renderer';


describe('ErrorBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< ErrorBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ErrorBar/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
