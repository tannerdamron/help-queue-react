import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';

function Admin(props) {
  const { ticketList, currentRouterPath } = props;
  return (
    <div>
      <h2>Admin</h2>
      <TicketList
        ticketList={ticketList}
        currentRouterPath={currentRouterPath}
      />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.instanceOf(Array).isRequired,
  currentRouterPath: PropTypes.string.isRequired,
};

export default Admin;
