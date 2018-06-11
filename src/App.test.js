import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { App } from './App';

test('App submits forms properly', () => {
  const mockSubmit = jest.fn();
  // this is the magic, bind a mock to the property that you've bound your dispatch function to
  const app = ReactTestUtils.renderIntoDocument(<App dispatchSubmit={mockSubmit} />);

  const formInput = ReactTestUtils.findRenderedDOMComponentWithClass(app, 'input');
  formInput.value = 'test';
  ReactTestUtils.Simulate.change(formInput);

  const form = ReactTestUtils.findRenderedDOMComponentWithTag(app, 'form');
  ReactTestUtils.Simulate.submit(form);

  // check the mock calls here
  expect(mockSubmit.mock.calls.length).toBe(1);
  expect(mockSubmit.mock.calls[0][0]).toBe("test");
});
