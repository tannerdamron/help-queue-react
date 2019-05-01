import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  const {
    location,
    names,
    formattedWaitTime,
    issue,
  } = props;
  return (
    <div>
      <h3>
        {location}
        {`- ${names}`}
      </h3>
      <h4>{formattedWaitTime}</h4>
      <p><em>{issue}</em></p>
      <hr />
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Ticket;
