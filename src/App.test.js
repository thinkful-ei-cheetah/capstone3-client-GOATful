// import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer'
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// import App from './App';

// import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'

// configure({ adapter: new Adapter() });

// it('NavBar renders without crashing', () => {
//     const wrapper = shallow(<App />)
//     expect(toJson(wrapper)).toMatchSnapshot()
// });


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
