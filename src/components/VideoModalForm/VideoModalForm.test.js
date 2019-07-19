import React from 'react';
import ReactDOM from 'react-dom';
import VideoModalForm from './VideoModalForm';
import renderer from 'react-test-renderer';


describe('VideoModalForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< VideoModalForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<VideoModalForm/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
