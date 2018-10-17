import React from "react";
import Player from "./Player";
import Header from "./Header";
import PlayerForm from "./PlayerForm";

export default function Scoreboard() {
	return (
		<div className="scoreboard">
			<Header />
			<div className="players">
				<Player />

				<PlayerForm />
			</div>
		</div>
	);
}
