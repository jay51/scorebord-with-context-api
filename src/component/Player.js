import React from "react";
import { Consumer } from "../context";

const Player = props => {
	return (
		<Consumer>
			{players =>
				players.map((player, index) => (
					<div className="player" key={index}>
						<div className="player-name">
							{player.name}
							<button
								className="remove-player"
								onClick={() => props.remove(index)}
							>
								X
							</button>
						</div>
						<div className="player-score">
							<div className="counter">
								<button
									onClick={() => props.decrement(index, -1)}
									className="counter-action decrement"
								>
									-
								</button>
								<div className="counter-score">{player.score}</div>
								<button
									onClick={() => props.increment(index, 1)}
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
