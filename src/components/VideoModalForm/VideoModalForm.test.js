import React from 'react';
import ReactDOM from 'react-dom';
import VideoModalForm from './VideoModalForm';

describe('VideoModalForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< VideoModalForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
