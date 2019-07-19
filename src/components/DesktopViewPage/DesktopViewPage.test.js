import React from 'react';
import ReactDOM from 'react-dom';
import DesktopViewPage from './DesktopViewPage';
import renderer from 'react-test-renderer';


describe('DesktopViewPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< DesktopViewPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<DesktopViewPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
