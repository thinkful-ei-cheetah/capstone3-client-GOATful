import React from 'react';
import ReactDOM from 'react-dom';
import AddVideo from './AddVideo';

describe('AddVideo Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AddVideo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
