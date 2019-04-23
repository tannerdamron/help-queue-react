import React from 'react';

function Header(){
  return(
    <div>
      <style jsx global>{`
        .header {
          color: aquamarine;
          text-shadow: 1px 1px black;
          font-family: helvetica;
          font-size: 50px;
        }
      `}</style>
      <h1 className="header">Help Queue</h1>
    </div>
  );
}

export default Header;