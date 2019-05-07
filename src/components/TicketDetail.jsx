import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props) {
  const { selectedTicket } = props;
  return (
    <div>
      <hr />
      <h1>
        {`${selectedTicket.names} - ${selectedTicket.location}`}
      </h1>
      <h2>{`Submitted ${selectedTicket.formattedWaitTime} ago`}</h2>
      <h4>
        <em>{selectedTicket.issue}</em>
      </h4>
      <hr />
    </div>
  );
}

TicketDetail.propTypes = {
  selectedTicket: PropTypes.instanceOf(Object).isRequired,
};

export default TicketDetail;
