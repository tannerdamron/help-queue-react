import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';

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
      <Switch>
        <Route exact path='/' component={TicketList}/>
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
      
    </div>
  );
}

export default App;