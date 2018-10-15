import React from "react";
import StopWatch from "./Watch";
import { Consumer } from "../context";

export default function Header() {
	return (
		<Consumer>
			{players => {
				let totalPlayers = players.length;
				let totalPoint = players.reduce(
					(points, player) => points + player.score,
					0
				);
				return (
					<div className="header">
						<h1>scorebord</h1>
						<table className="stats">
							<tbody>
								<tr>
									<td>Players:</td>
									<td>{totalPlayers}</td>
								</tr>
								<tr>
									<td>Total Points:</td>
									<td>{totalPoint}</td>
								</tr>
							</tbody>
						</table>
						<StopWatch />
					</div>
				);
			}}
		</Consumer>
	);
}
