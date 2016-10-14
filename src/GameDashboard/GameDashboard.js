import React from 'react';
import './GameDashboard.sass';
import GameBoard from '../GameBoard/GameBoard';

const GameDashboard = React.createClass({
  render() {
    return (
      <div className="GameDashboard">
        <div className="GameDashboard-header">
          <h2>React Roguelike</h2>
        </div>
        <GameBoard />
      </div>
    );
  }
});

export default GameDashboard;
