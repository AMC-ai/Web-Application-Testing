import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
// import Dashboard from './components/Dashboard';
import { render, fireEvent } from '@testing-library/react';
import expectExport from 'expect';

let result;
let expected;

test('it displays text Balls', () => {
  const { getByText } = render(<App />);
  getByText(/Balls/i);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders', () => {
  render(<App />);
});


test('button id', () => {
  const { getByTestId } = render(<App />)
  getByTestId(`balls`)

})

test('button id clicking event', () => {
  const { getByTestId } = render(<App />)

  fireEvent.click(getByTestId("strikes"));
  fireEvent.click(getByTestId("strikes"));
  fireEvent.click(getByTestId("strikes"));
  expect(getByTestId("strikes-count")).toHaveTextContent("0");
});


// describe('Balls', () => {
//   test('has class', () => {
//     // arrange
//     const button = document.querySelector('[id="balls"]');
//     const { toHaveClass } = classNames(string['ball-btn'])

//     //act

//     // assert
//     expect(button).classNames('ball-btn');
//   });
// });

// describe('Stikes', () => {

// });

// describe('Hits', () => {

// });

// describe('Fouls', () => {

// });