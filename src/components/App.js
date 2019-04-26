import React, { Component } from 'react';
import '../styles/App.css';
import { filter, size, map, includes } from 'lodash';

import participants from '../assets/participants';
import findWinner from '../assets/find-winner';

class App extends Component {
  state = {
    winners : []
  }
  
  chooseWinner = e => {
    // remove previous winners from participant pool
    let participantPool = filter(participants, participant => !includes(this.state.winners, participant.name));
    
    if (size(participantPool)) {
      // add winner to state list
      this.setState(prev => ({ winners : [ ...prev.winners, findWinner(participantPool) ]}))
    } else {
      // alert user if no more available winners
      alert('No more eligible participants!');
    }
  }
  
  render() {
    return (
      <div className="App">
        <div
          className="btn btn-success"
          onClick={this.chooseWinner}
        >
          Pull Ticket From Bucket
        </div>
        
        <h3>Winners</h3>
        <ul>
          {map(this.state.winners, winner => <li key={winner} className="winner">{winner}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
