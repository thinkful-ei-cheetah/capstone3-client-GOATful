import React from 'react';
import ReactDOM from 'react-dom';
import MeetTeamPage from './MeetTeamPage';
import renderer from 'react-test-renderer';

describe('MeetTeamPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< MeetTeamPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MeetTeamPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
