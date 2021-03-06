import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import PreviewItem from './PreviewItem';
import renderer from 'react-test-renderer';


describe('PreviewItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      < PreviewItem />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><PreviewItem/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
