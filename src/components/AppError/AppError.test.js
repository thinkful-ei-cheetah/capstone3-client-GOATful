import React from 'react';
import ReactDOM from 'react-dom';
import AppError from './AppError';
import renderer from 'react-test-renderer';

function ProblemChild() {
  throw new Error('bleh')
}
describe('AppError Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <AppError>
      <ProblemChild />
    </AppError>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AppError><ProblemChild/></AppError>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
