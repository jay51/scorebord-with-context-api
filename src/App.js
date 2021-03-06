import React, { Component } from "react";
import ScoreBoard from "./component/ScoreBoard";
import { Provider } from "./context";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Score Tracker</h1>
				</header>
				<Provider>
					<ScoreBoard />
				</Provider>
			</div>
		);
	}
}

export default App;
