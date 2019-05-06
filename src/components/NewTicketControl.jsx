import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation() {
    this.setState({ formVisibleOnPage: true });
  }

  render() {
    const { formVisibleOnPage } = this.state;
    let currentlyVisibleContent = null;
    if (formVisibleOnPage) {
      currentlyVisibleContent = <NewTicketForm />;
    } else {
      // eslint-disable-next-line max-len
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewTicketControl;
