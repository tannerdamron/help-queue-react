import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  return (
    <div>
      <style jsx global>{`
        body {
          text-align: center;
        }
        .clickable {
          color: blue;
        }
        .clickable:hover {
          cursor: pointer;
        }
      `}</style>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;