/* eslint-disable linebreak-style */
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Admin from './Admin';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedTicket: null,
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(
      () => this.updateTicketElapsedWaitTime(),
      60000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    // const { masterTicketList } = this.state;
    // const newMasterTicketList = masterTicketList.slice();
    // newMasterTicketList.forEach(
    //   ticket => (ticket.formattedWaitTime = ticket.timeOpen.fromNow(true))
    // );
    // this.setState({ masterTicketList: newMasterTicketList });
  }

  handleChangingSelectedTicket(ticketId) {
    console.log("asdddddddddddddddddddddddo");
    this.setState({ selectedTicket: ticketId });
  }

  render() {
    const { selectedTicket } = this.state;
    const { masterTicketList } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <TicketList ticketList={masterTicketList} />}
          />
          <Route path="/newticket" render={() => <NewTicketControl />} />
          <Route
            path="/admin"
            render={props => (
              <Admin
                ticketList={masterTicketList}
                currentRouterPath={props.location.pathname}
                onTicketSelection={e => this.handleChangingSelectedTicket(e)}
                selectedTicket={selectedTicket}
              />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.instanceOf(Object).isRequired,
};
const mapStateToProps = state => ({
  masterTicketList: state,
});

export default withRouter(connect(mapStateToProps)(App));
