import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

function TicketList(props) {
  const { ticketList, currentRouterPath } = props;
  return (
    <div>
      <hr />
      {ticketList.map(ticket => (
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={currentRouterPath}
          key={ticket.id}
        />
      ))}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.instanceOf(Array).isRequired,
  currentRouterPath: PropTypes.string,
};

TicketList.defaultProps = {
  currentRouterPath: PropTypes.string,
};

export default TicketList;
