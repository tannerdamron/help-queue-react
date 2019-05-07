import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

function Admin(props) {
  const {
    ticketList,
    currentRouterPath,
    selectedTicket,
    onTicketSelection,
  } = props;
  let optionalSelectedTicketContent = null;
  if (selectedTicket != null) {
    optionalSelectedTicketContent = (
      <TicketDetail selectedTicket={ticketList[selectedTicket]} />
    );
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={ticketList}
        currentRouterPath={currentRouterPath}
        onTicketSelection={onTicketSelection}
      />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.instanceOf(Object).isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.string,
};

Admin.defaultProps = {
  currentRouterPath: PropTypes.string,
  selectedTicket: PropTypes.string,
};

export default Admin;
