import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  const {
    location,
    names,
    formattedWaitTime,
    issue,
    currentRouterPath,
  } = props;
  const ticketInfo = (
    <div>
      <h3>{`${location} - ${names}`}</h3>
      <h4>{formattedWaitTime}</h4>
      <p><em>{issue}</em></p>
      <p>{currentRouterPath}</p>
      <hr />
    </div>
  );
  return (
    <div
      onClick={() => { alert(`hey, you just clicked the ticket belonging to ${names}`); }}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      {ticketInfo}
      <p>if worked</p>
    </div>
  );

}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
};

Ticket.defaultProps = {
  currentRouterPath: PropTypes.string,
};

export default Ticket;
