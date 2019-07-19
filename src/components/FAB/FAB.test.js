import React from 'react';
import ReactDOM from 'react-dom';
import FAB from './FAB';
import renderer from 'react-test-renderer';

describe('FAB Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< FAB />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<FAB/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
