import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import NavBar from './NavBar';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() });

it('NavBar renders without crashing', () => {
    const wrapper = shallow(<NavBar />)
    expect(toJson(wrapper)).toMatchSnapshot()
});
