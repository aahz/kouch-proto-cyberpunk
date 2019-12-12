import React, {Component} from 'react';

import debounce from 'lodash/debounce';
import isFunction from 'lodash/isFunction';

import './style.less';


function mapValue(value, inMin, inMax, outMin, outMax) {
	return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

export default class Player extends Component {
	constructor(props, ...args) {
		super(props, ...args);

		this._refs = {
			player: React.createRef(),
		};

		this.state = {
			rotateX: 0,
			rotateY: 0,
		};

		this._onMouseMoveExecute = debounce(this._onMouseMoveExecute.bind(this), 10, {leading: true, trailing: true});
	}

	_onMouseEnter() {
		if (!isFunction(this.props.onMouseEnter)) {
			return;
		}

		this.props.onMouseEnter();
	}

	_onMouseMove(event) {
		this._onMouseMoveExecute(event.clientX, event.clientY);
	}

	_onMouseLeave() {
		if (!isFunction(this.props.onMouseLeave)) {
			return;
		}

		this.setState({
			rotateX: 0,
			rotateY: 0,
		});

		this.props.onMouseLeave();
	}

	_onMouseMoveExecute(clientX, clientY) {
		const box = this._refs.player.current.getBoundingClientRect();

		const x = clientX - box.left;
		const y = clientY - box.top;

		this.setState({
			rotateX: mapValue(y, 0, 720, 1, -1),
			rotateY: mapValue(x, 0, 1280, -0.5, 0.5),
		});

		if (isFunction(this.props.onMouseMove)) {
			this.props.onMouseMove(x, y);
		}
	}

	render() {
		return (
			<div
				ref={this._refs.player}
				className="k-app-player">
				<div className="k-app-player__video">
					<iframe
						className="k-app-player__video__frame"
						src="https://player.twitch.tv/?channel=dota2kouchtvdemo"
						width="1280"
						height="720"
						frameBorder="0"
						scrolling="no"
						allowFullScreen="no">
					</iframe>
				</div>
				<div
					className="k-app-player__container"
					style={{transform: `rotateX(${this.state.rotateX}deg) rotateY(${this.state.rotateY}deg)`}}
					onMouseEnter={this._onMouseEnter.bind(this)}
					onMouseMove={this._onMouseMove.bind(this)}
					onMouseLeave={this._onMouseLeave.bind(this)}>
					{this.props.children}
				</div>
			</div>
		)
	}
}
