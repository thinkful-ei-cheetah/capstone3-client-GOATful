import React from 'react';
import ReactDOM from 'react-dom';
import AppError from './AppError';

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
})
