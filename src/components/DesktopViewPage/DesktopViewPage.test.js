import React from 'react';
import ReactDOM from 'react-dom';
import DesktopViewPage from './DesktopViewPage';

describe('DesktopViewPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< DesktopViewPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
