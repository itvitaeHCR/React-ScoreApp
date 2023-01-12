import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Player from './Player';


class App extends React.Component {
  state = {
    players: [
      {
        name: "Maurice",
        score: 1,
        id: 1
      },
      {
        name: "James",
        score: 5,
        id: 2
      },
      {
        name: "Ellen",
        score: 1,
        id: 3
      },
      {
        name: "Alaa",
        score: 1,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    console.log('index: ' + index, 'delta: ' + delta)
    this.setState(
      { score: this.state.players[index].score += delta}
    )
  }

  
  render() {
    return (
      <div className="scoreboard">
          <Header title="Scoreboard" totalPlayers={this.state.players.length}/>

          {/* Player list */}
          {this.state.players.map((player, index) => 
              <Player
                name = {player.name}
                key = {player.id.toString()}
                score = {player.score}
                changeScore={this.handleScoreChange}
                index={index}
              />
          )}
      </div>
    )
  };

}

export default App;