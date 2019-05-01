import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404({ location }) {
  return (
    <div>
      <style jsx>
        {`
          .errorPage {
            background-color: rgba(255, 0, 0, .7);
            color: white;
            margin-top: 2%;
            width: 20%;
            height: 50%;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
        `}

      </style>
      <div className="errorPage">
        <br />
        <h1>Error!</h1>
        <h2>{`The page ${location.pathname} does not exist!`}</h2>
        <h3>
          {'Would you like to return'}
          <Link to="/">Home</Link>
          {'instead?'}
        </h3>
      </div>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Error404;
