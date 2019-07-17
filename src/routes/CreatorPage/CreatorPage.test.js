import React from 'react';
import ReactDOM from 'react-dom';
import CreatorPage from './CreatorPage';

describe('CreatorPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< CreatorPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
