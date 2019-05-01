import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx global>
        {`
        .header {
          color: aquamarine;
          text-shadow: 1px 1px black;
          font-family: helvetica;
          font-size: 50px;
        }
      `}
      </style>
      <h1 className="header">Help Queue</h1>
      <Link to="/">Home</Link>
      {' '}
      <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
