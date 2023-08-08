import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission } from '../redux/mission/missionslice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(reserveMission(mission.mission_id));
  };

  return (
    <div className="mission-container">
      <div className="mission-name">
        <h2>{mission.mission_name}</h2>
      </div>
      <div className="mission-info">
        <p className="miss-desc">{mission.description}</p>
      </div>
      <div className="mission-buttons">
        {mission.reserved ? (
          <button type="submit" className="cancel-button" onClick={handleCancelMission}>
            Cancel Mission
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
  }).isRequired,
};

export default Mission;
