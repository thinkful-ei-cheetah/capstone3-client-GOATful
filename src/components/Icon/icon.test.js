import React from 'react';
import ReactDOM from 'react-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon';

describe('icon Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Icon icon={faHome}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
