import React from "react";
import { Consumer } from "../context";

// note: you don't have to wrap everything with the consumer,
// just the part that needs the data

const Player = () => {
	return (
		<Consumer>
			{context =>
				context.players.map((player, index) => (
					<div className="player" key={index}>
						<div className="player-name">
							{player.name}
							<button
								className="remove-player"
								onClick={() => context.actions.removePlayer(index)}
							>
								X
							</button>
						</div>
						<div className="player-score">
							<div className="counter">
								<button
									onClick={() => context.actions.updateScore(index, -1)}
									className="counter-action decrement"
								>
									-
								</button>
								<div className="counter-score">{player.score}</div>
								<button
									onClick={() => context.actions.updateScore(index, 1)}
									className="counter-action increment"
								>
									+
								</button>
							</div>
						</div>
					</div>
				))
			}
		</Consumer>
	);
};

export default Player;
