import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission, cancelMission } from '../redux/mission/missionslice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const handleReserveMission = () => {
    dispatch(reserveMission(mission.mission_id));
  };

  const handleCancelMission = () => {
    dispatch(cancelMission(mission.mission_id));
  };

  return (
    <div className="mission-container">
      <div className="mission-info">
        <h2 className="miss-name">{mission.mission_name}</h2>
        <p className="miss-desc">{mission.description}</p>
      </div>
      <div className="mission-status">
        {mission.reserved ? (
          <span className="active-member">Active member</span>
        ) : (
          <span className="not-member">Not a member</span>
        )}
      </div>
      <div className="mission-buttons">
        {mission.reserved ? (
          <button type="submit" className="cancel-button" onClick={handleCancelMission}>
            Leave Mission
          </button>
        ) : (
          <button type="submit" className="join-button" onClick={handleReserveMission}>
            Join Mission
          </button>
        )}
      </div>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
