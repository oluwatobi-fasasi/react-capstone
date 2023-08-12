import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Dragon from './Dragon';

describe('Dragon Component', () => {
  it('renders Dragon name and description', () => {
    const main = renderer
      .create(
        <React.StrictMode>
          <Provider store={store}>
            <Router>
              <Dragon />
            </Router>
          </Provider>
        </React.StrictMode>,
      )
      .toJSON();

    expect(main).toMatchSnapshot();
  });
});
