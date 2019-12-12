import React, {Component} from 'react';

import shuffle from 'lodash/shuffle';
import isFunction from 'lodash/isFunction';

import animate from 'animejs';

import {SECOND_LEVEL_DATA} from '../../constants';

import './style.less';


const GLITCH = [
	'polygon(0% 2%, 100% 2%, 100% 5%, 0% 5%)',
	'polygon(0% 15%, 100% 15%, 100% 15%, 0% 15%)',
	'polygon(0% 10%, 100% 10%, 100% 20%, 0% 20%)',
	'polygon(0% 1%, 100% 1%, 100% 2%, 0% 2%)',
	'polygon(0% 33%, 100% 33%, 100% 33%, 0% 33%)',
	'polygon(0% 44%, 100% 44%, 100% 44%, 0% 44%)',
	'polygon(0% 50%, 100% 50%, 100% 20%, 0% 20%)',
	'polygon(0% 70%, 100% 70%, 100% 70%, 0% 70%)',
	'polygon(0% 80%, 100% 80%, 100% 80%, 0% 80%)',
	'polygon(0% 50%, 100% 50%, 100% 55%, 0% 55%)',
	'polygon(0% 70%, 100% 70%, 100% 80%, 0% 80%)',
];

export default class Panel extends Component {
	constructor(props, ...args) {
		super(props, ...args);

		this.state = {
			selection: null,
		};

		this._refs = {
			panel: React.createRef(),
			header: React.createRef(),
			headerTitle: React.createRef(),
			headerImage: React.createRef(),
		};

		this._activateAnimation = null;
		this._selectAnimation = null;
	}

	componentDidUpdate(prevProps) {
		this._animateActivation(prevProps.active, this.props.active);
		this._animateSelection(prevProps.selection[1], this.props.selection[1]);
	}

	_animateActivation(prevActive, currActive) {
		if (prevActive === currActive) {
			return;
		}

		if (this._activateAnimation) {
			this._activateAnimation.pause();
		}

		this._refs.panel.current.style.display = '';

		this._activateAnimation = animate({
			targets: this._refs.panel.current,
			duration: currActive ? 300 : 200,
			easing: 'easeOutSine',
			opacity: currActive ? 1 : 0,
			translateY: currActive ? 0 : 10,
			filter: [...shuffle([
				'blur(0px)',
				'blur(3px)',
				'blur(70px)',
				'blur(4px)',
				'blur(11px)',
				'blur(35px)',
				'blur(6px)',
			]), 'blur(0px)'],
			clipPath: [...shuffle(GLITCH), 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)'],
			complete: () => {
				this._refs.panel.current.style.filter = '';
				this._refs.panel.current.style.clipPath = '';

				if (currActive) {
					return;
				}

				this._refs.panel.current.style.display = 'none';
			}
		});
	}

	_animateSelection(prevSelection, currSelection) {
		if (prevSelection === currSelection || !currSelection) {
			return;
		}

		if (this._selectAnimation) {
			this._selectAnimation.pause();
		}

		this._selectAnimation = animate.timeline({
			duration: 100,
			easing: 'easeOutSine',
			autopaly: false,
			complete: () => {
				this.setState({selection: currSelection}, () => {
					this._selectAnimation = animate.timeline({
						duration: 200,
						easing: 'easeInQuad',
						autoplay: false,
					});

					this._selectAnimation.add({
						targets: this._refs.headerTitle.current,
						translateX: [30, 0],
						opacity: [0, 1],
					}, 0);

					this._selectAnimation.add({
						targets: this._refs.headerImage.current,
						top: -80,
						opacity: 0.3,
					}, 0);

					this._selectAnimation.play();
				});
			}
		});

		this._selectAnimation.add({
			targets: this._refs.headerTitle.current,
			translateX: [0, -30],
			opacity: [1, 0],
		}, 0);

		this._selectAnimation.add({
			targets: this._refs.headerImage.current,
			top: 140,
			opacity: 0,
		}, 0);

		this._selectAnimation.play();
	}

	render() {
		const data = SECOND_LEVEL_DATA[this.state.selection] || {};

		return (
			<div
				ref={this._refs.panel}
				className="k-app-panel"
				style={{display: 'none'}}>
				<div
					ref={this._refs.header}
					className="k-app-panel__header">
					<div className="k-app-panel__header__title">
						<div
							ref={this._refs.headerImage}
							className="k-app-panel__header__title__image" dangerouslySetInnerHTML={{__html: data.icon}} />
						<div
							ref={this._refs.headerTitle}
							className="k-app-panel__header__title__text">
							{data.title}
						</div>
					</div>
					<div className="k-app-panel__header__corner">
						<svg
							className="k-app-panel__header__corner__background"
							viewBox="0 0 60 60">
							<path
								d="M0 0 L50 0 L60 10 L60 50 L50 60 L0 60 Z"
								fill="currentColor" />
						</svg>
						<svg
							className="k-app-panel__header__corner__close"
							viewBox="0 0 47.971 47.971" onClick={() => {
								if (!isFunction(this.props.onChangeSelection)) {
									return;
								}

								this.props.onChangeSelection([this.props.selection[0], null]);
							}}>
							<path
								d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"
								fill="currentColor" />
						</svg>
					</div>
				</div>
			</div>
		);
	}
}
