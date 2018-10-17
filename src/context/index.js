import React, { Component } from "react";

// export const { Provider, Consumer } = React.createContext();
const ScoreboardContext = React.createContext();
export const Consumer = ScoreboardContext.Consumer;

export class Provider extends Component {
	state = {
		players: []
	};

	//increment or decrement player score
	handleScoreUpdate(index, val) {
		let newPlayers = this.state.players.slice();
		newPlayers[index].score += val;
		// sort the players based on score
		newPlayers.sort((a, b) => b.score - a.score);
		this.setState({ players: newPlayers });
	}
	// add new player
	handleAddPlayer(player) {
		let newPlayers = [...this.state.players, { name: player, score: 0 }];
		newPlayers.sort((a, b) => b.score - a.score);
		this.setState({ players: newPlayers });
	}
	// handle removing player
	handleRemove(index) {
		let newPlayers = [...this.state.players];
		newPlayers.splice(index, 1);
		newPlayers.sort((a, b) => b.score - a.score);
		this.setState({ players: newPlayers });
	}

	render() {
		return (
			<ScoreboardContext.Provider
				value={{
					players: this.state.players,
					actions: {
						updateScore: this.handleScoreUpdate.bind(this),
						removePlayer: this.handleRemove.bind(this),
						addPlayer: this.handleAddPlayer.bind(this)
					}
				}}
			>
				{this.props.children}
			</ScoreboardContext.Provider>
		);
	}
}
