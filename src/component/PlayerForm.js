import React from "react";
import { Consumer } from "../context";

export default function PlayerForm() {
	const playerInput = React.createRef();

	return (
		<Consumer>
			{({ actions }) => {
				function handleSubmit(e) {
					e.preventDefault();
					actions.addPlayer(playerInput.current.value);
					e.currentTarget.reset();
				}

				return (
					<div>
						<div className="add-player-form">
							<form onSubmit={handleSubmit.bind(this)}>
								<input type="text" ref={playerInput} />
								<input type="submit" />
							</form>
						</div>
					</div>
				);
			}}
		</Consumer>
	);
}
