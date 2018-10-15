import React from "react";

export default class StopWatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false,
			previouseTime: 0,
			elapsedTime: 0
		};
		this.onTick = this.onTick.bind(this);
	}

	componentDidMount() {
		this.interval = setInterval(this.onTick, 100);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onTick() {
		if (this.state.running) {
			const now = Date.now();
			this.setState({
				previouseTime: now,
				elapsedTime: this.state.elapsedTime + (now - this.state.previouseTime)
			});
		}
	}

	handleClick() {
		this.setState({ running: !this.state.running, previouseTime: Date.now() });
	}

	onReset() {
		this.setState({ elapsedTime: 0, previouseTime: Date.now() });
	}

	render() {
		const seconds = Math.floor(this.state.elapsedTime / 1000);
		return (
			<div className="stopwatch">
				<h2>Stop watch</h2>
				<div className="stopWatch-time">{seconds}</div>
				<button onClick={this.handleClick.bind(this)}>
					{this.state.running ? "Stop" : "Start"}
				</button>
				<button onClick={this.onReset.bind(this)}>Reset</button>
			</div>
		);
	}
}
