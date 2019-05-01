import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  const { onTroubleshootingConfirmation } = props;
  return (
    <div>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button type="button" onClick={onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func.isRequired,
};

export default ConfirmationQuestions;
