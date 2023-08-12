import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Profile from './myProfile';

it('Test if the Profile page renders dragon element correctly', () => {
  const Dragon = [];
  const renderedDragon = renderer.create(
    <Provider store={store}>
      <Profile Dragon={Dragon} />
    </Provider>,
  );

  expect(renderedDragon).toMatchSnapshot();
});
