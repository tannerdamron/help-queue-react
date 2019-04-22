/* eslint-disable no-unused-vars */
import React from 'react';
import Ticket from './Ticket';

let masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save records'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Image not displaying'
  },
  {
    names: 'Imani and Jacob',
    location: '9F',
    issue: 'No workyyyyyyyy'
  }
];

function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;