import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Mission from './mission';
import { reserveMission, cancelMission } from '../redux/mission/missionslice';

describe('Mission Component Tests', () => {
  const mockStore = configureStore();

  const mockMission = {
    mission_id: 'hello',
    mission_name: 'Test Mission',
    description: 'This is a test mission description.',
    reserved: false,
  };

  test('renders correctly when not reserved', () => {
    const store = mockStore({});
    const tree = renderer.create(
      <Provider store={store}>
        <Mission mission={mockMission} />
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('calls handleReserveMission on Join Mission button click', () => {
    const store = mockStore({});
    const component = renderer.create(
      <Provider store={store}>
        <Mission mission={mockMission} />
      </Provider>,
    );

    const joinButton = component.root.findByProps({ className: 'join-button' });
    joinButton.props.onClick();

    const actions = store.getActions();
    expect(actions).toEqual([reserveMission(mockMission.mission_id)]);
  });

  test('calls handleCancelMission on Leave Mission button click', () => {
    const reservedMission = {
      ...mockMission,
      reserved: true,
    };

    const store = mockStore({});
    const component = renderer.create(
      <Provider store={store}>
        <Mission mission={reservedMission} />
      </Provider>,
    );

    const leaveButton = component.root.findByProps({ className: 'cancel-button' });
    leaveButton.props.onClick();

    const actions = store.getActions();
    expect(actions).toEqual([cancelMission(reservedMission.mission_id)]);
  });

  test('renders correctly when reserved', () => {
    const reservedMission = {
      ...mockMission,
      reserved: true,
    };

    const store = mockStore({});
    const tree = renderer.create(
      <Provider store={store}>
        <Mission mission={reservedMission} />
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
