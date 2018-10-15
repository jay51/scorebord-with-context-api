import React from "react";
import Player from "./Player";
import Header from "./Header";
import { Provider } from "../context";

class Scoreboard extends React.Component {
	constructor(props) {
		super(props);
		this.handleScoreUpdate = this.handleScoreUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleAddPlayer = this.handleAddPlayer.bind(this);
		this.handleRemove = this.handleRemove.bind(this);

		this.state = {
			name: "",
			players: []
		};
	}

	//increment or decrement player score
	handleScoreUpdate(index, val) {
		let newPlayers = this.state.players.slice();
		newPlayers[index].score += val;
		// sort the players based on score
		newPlayers.sort((a, b) => b.score - a.score);
		this.setState({ players: newPlayers });
	}

	handleChange(event) {
		this.setState({ name: event.target.value });
	}

	// add new player
	handleAddPlayer(e) {
		let name = this.state.name;
		let newPlayers = [...this.state.players, { name: name, score: 0 }];
		newPlayers.sort((a, b) => b.score - a.score);
		this.setState({ players: newPlayers, name: "" });
		e.preventDefault();
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
			<Provider value={this.state.players}>
				<div className="scoreboard">
					<Header />
					<div className="players">
						<Player
							increment={this.handleScoreUpdate}
							decrement={this.handleScoreUpdate}
							remove={this.handleRemove}
						/>

						{/* Add player form  */}
						<div className="add-player-form">
							<form>
								<input
									type="text"
									value={this.state.name}
									onChange={this.handleChange}
								/>
								<input type="submit" onClick={this.handleAddPlayer} />
							</form>
						</div>

						<h3>{this.state.name}</h3>
					</div>
				</div>
			</Provider>
		);
	}
}

export default Scoreboard;
