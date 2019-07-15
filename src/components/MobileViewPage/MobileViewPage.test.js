import React from 'react';
import ReactDOM from 'react-dom';
import MobileViewPage from './MobileViewPage';

describe('MobileViewPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< MobileViewPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
