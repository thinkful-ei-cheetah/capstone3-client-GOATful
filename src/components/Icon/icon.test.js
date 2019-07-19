import React from 'react';
import ReactDOM from 'react-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon';
import renderer from 'react-test-renderer';

describe('icon Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Icon icon={faHome}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Icon icon={faHome}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
