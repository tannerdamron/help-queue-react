import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <h3 className="clickable">{props.location} - {props.names}</h3>
      <p className="clickable"><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Ticket;