import React from 'react';
import ReactDOM from 'react-dom';
import PreviewsPage from './PreviewsPage';

describe('PreviewsPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< PreviewsPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
