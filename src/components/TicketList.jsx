import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

function TicketList(props) {
  const { ticketList, currentRouterPath, onTicketSelection } = props;
  return (
    <div>
      <hr />
      {Object.keys(ticketList).map((ticketId) => {
        const ticket = ticketList[ticketId];
        return (
          <Ticket
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            formattedWaitTime={ticket.formattedWaitTime}
            currentRouterPath={currentRouterPath}
            key={ticketId}
            ticketId={ticketId}
            onTicketSelection={onTicketSelection}
          />
        );
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.instanceOf(Object).isRequired,
  currentRouterPath: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onTicketSelection: PropTypes.func,
};

TicketList.defaultProps = {
  currentRouterPath: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onTicketSelection: PropTypes.func,
};

export default TicketList;
