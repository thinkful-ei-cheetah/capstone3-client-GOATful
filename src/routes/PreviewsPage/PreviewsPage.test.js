import React from 'react';
import ReactDOM from 'react-dom';
import PreviewsPage from './PreviewsPage';
import renderer from 'react-test-renderer';


describe('PreviewsPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< PreviewsPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<PreviewsPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
