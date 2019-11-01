import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './components/Dashboard';

let result;
let expected;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('Balls', () => {
//   test('has class', () => {
//     // arrange
//     const button = document.querySelector('[id="balls"]');

//     //act

//     // assert
//     expect(button).toHaveClass('ball-btn');
//   });
// });

// describe('Stikes', () => {

// });

// describe('Hits', () => {

// });

// describe('Fouls', () => {

// });

test('button value', () => {
  result = document.querySelector('[id="balls"]');
  // console.log(result);
  expected = null;

  expect(result).toBe(expected);
})