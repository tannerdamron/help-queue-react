import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  const {
    location,
    names,
    formattedWaitTime,
    currentRouterPath,
    ticketId,
    onTicketSelection,
  } = props;
  const ticketInfo = (
    <div>
      <h3>{`${location} - ${names}`}</h3>
      <h4>{formattedWaitTime}</h4>
      <hr />
    </div>
  );
  if (currentRouterPath === '/admin') {
    return (
      <div onClick={() => {onTicketSelection(ticketId).bind(this);}}>
        {ticketInfo}
      </div>
    );
  }
  return <div>{ticketInfo}</div>;
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired,
};

Ticket.defaultProps = {
  currentRouterPath: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onTicketSelection: PropTypes.func,
};

export default Ticket;
