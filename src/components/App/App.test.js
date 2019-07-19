import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import {BrowserRouter} from 'react-router-dom' 

describe('App Component', () => {

  // it('NavBar renders without crashing', () => {
  //     const wrapper = shallow(<App />)
  //     expect(toJson(wrapper)).toMatchSnapshot()
  // });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        < App />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BrowserRouter><App/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

})


