import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import renderer from 'react-test-renderer';


describe('Loader Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< Loader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Loader/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
