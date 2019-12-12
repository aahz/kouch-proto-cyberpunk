import React, {Component} from 'react';

import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';

import animate from 'animejs';

import {FIRST_LEVEL, FIRST_LEVEL_DATA, SECOND_LEVEL, SECOND_LEVEL_DATA} from '../../constants';

import './style.less';


export default class Navigation extends Component {
	constructor(props, ...args) {
		super(props, ...args);

		this.state = {
			labels: null,
			secondLevel: this.props.secondLevel,
		};

		this._refs = {
			tip: React.createRef(),

			firstLevelItems: Object.values(FIRST_LEVEL).reduce((result, key) => ({...result, [key]: React.createRef()}), {}),
			firstLevelItemsLabels: Object.values(FIRST_LEVEL).reduce((result, key) => ({...result, [key]: React.createRef()}), {}),

			secondLevelItems: Object.values(SECOND_LEVEL).reduce((result, key) => ({...result, [key]: React.createRef()}), {}),
			secondLevelItemsLabels: Object.values(SECOND_LEVEL).reduce((result, key) => ({...result, [key]: React.createRef()}), {}),
		};

		this._activateFirstAnimation = null;
		this._activateSecondAnimation = null;
		this._changeSecondAnimation = null;
		this._labelsAnimation = null;
	}

	componentDidUpdate(prevProps, prevState) {
		this._animateActivationFirst(prevProps.activeFirst, this.props.activeFirst);
		this._animateActivationSecond(prevProps.activeSecond, this.props.activeSecond);
		this._animateChangeSecond(prevProps.secondLevel, this.props.secondLevel);
		this._animateLabels(prevState.labels, this.state.labels);
	}

	_animateActivationFirst(prevActive, currActive) {
		if (prevActive === currActive) {
			return;
		}

		if (this._activateFirstAnimation) {
			this._activateFirstAnimation.pause();
		}

		this._activateFirstAnimation = animate.timeline({
			autoplay: false,
		});

		if (currActive) {
			this._activateFirstAnimation.add({
				targets: this._refs.tip.current,
				duration: 200,
				easing: 'easeOutBack',
				opacity: 1,
				translateY: 0,
			});
		}

		this._activateFirstAnimation.add({
			targets: Object.values(this._refs.firstLevelItems).map(ref => ref.current),
			duration: currActive ? 200 : 100,
			delay: (element, index, length) => {
				return (
					currActive
						? (length - (index + 1)) * 100
						: index * 50
				);
			},
			easing: currActive ? 'easeOutBack' : 'easeInQuad',
			opacity: (
				currActive
					? {
						duration: 50,
						value: 1
					}
					: {
						duration: 90,
						value: 0
					}
			),
			translateY: currActive ? '0%' : '-20%',
			rotateX: currActive ? 0 : 90,
		});

		if (!currActive) {
			this._activateFirstAnimation.add({
				targets: this._refs.tip.current,
				duration: 200,
				easing: 'linear',
				opacity: 0.4,
				translateY: 10,
			})
		}


		this._activateFirstAnimation.play();
	}

	_animateActivationSecond(prevActive, currActive) {
		if (prevActive === currActive) {
			return;
		}

		if (this._activateSecondAnimation) {
			this._activateSecondAnimation.pause();
		}

		this._activateSecondAnimation = animate({
			targets: (
				Object.entries(this._refs.secondLevelItems)
					.reduce((result, [key, ref]) => {
						if (!(ref.current && this.state.secondLevel.includes(key))) {
							return result;
						}

						return [
							...result,
							ref.current,
						]
					}, [])
			),
			duration: currActive ? 200 : 100,
			delay: (element, index, length) => {
				return (
					currActive
						? (length - (index + 1)) * 100
						: index * 50
				);
			},
			easing: currActive ? 'easeOutBack' : 'easeInQuad',
			opacity: (
				currActive
					? {
						duration: 50,
						value: 1
					}
					: {
						duration: 90,
						value: 0
					}
			),
			rotateY: currActive ? 0 : 90,
		})
	}

	_animateChangeSecond(prevItems, currItems) {
		if (isEqual(prevItems, currItems)) {
			return;
		}

		if (this._changeSecondAnimation) {
			this._changeSecondAnimation.pause();
		}

		const targets = this.state.secondLevel.map(key => this._refs.secondLevelItems[key].current).filter(Boolean);

		this._changeSecondAnimation = animate({
			targets,
			duration: 100,
			delay: (element, index) => {
				return index * 50;
			},
			easing: 'easeOutQuad',
			opacity: 0,
			complete: () => {
				this.setState({
					secondLevel: currItems,
				}, () => {
					const targets = this.state.secondLevel.map(key => this._refs.secondLevelItems[key].current).filter(Boolean);

					targets.forEach((target) => {
						target.style.opacity = '0';
					});

					this._changeSecondAnimation = animate({
						targets,
						duration: 100,
						delay: (element, index, length) => {
							return (length - (index + 1)) * 50;
						},
						easing: 'easeInQuad',
						rotateY: [90, 0],
						opacity: 1,
					})
				});
			}
		});
	}

	_animateLabels(prevLabels, currLabels) {
		if (prevLabels === currLabels) {
			return;
		}

		if (this._labelsAnimation) {
			this._labelsAnimation.pause();
		}

		if (!currLabels) {
			this._labelsAnimation = animate({
				targets: (
					[
						...Object.values(this._refs.firstLevelItemsLabels),
						...Object.values(this._refs.secondLevelItemsLabels),
					].map(ref => ref.current).filter(Boolean)
				),
				width: 0,
			});

			return;
		}

		this._labelsAnimation = animate.timeline({
			autoplay: false,
		});

		if (currLabels === 'first') {
			this._labelsAnimation.add({
				targets: Object.values(this._refs.secondLevelItemsLabels).map(ref => ref.current).filter(Boolean),
				width: 0,
			});

			this._labelsAnimation.add({
				targets: Object.values(this._refs.firstLevelItemsLabels).map(ref => ref.current).filter(Boolean),
				width: (el) => {
					const text = el.querySelector('span');

					return text.offsetWidth;
				},
			}, 0);
		}

		if (currLabels === 'second') {
			this._labelsAnimation.add({
				targets: Object.values(this._refs.firstLevelItemsLabels).map(ref => ref.current).filter(Boolean),
				width: 0,
			});

			this._labelsAnimation.add({
				targets: Object.values(this._refs.secondLevelItemsLabels).map(ref => ref.current).filter(Boolean),
				width: (el) => {
					const text = el.querySelector('span');

					return text.offsetWidth;
				},
			}, 0);
		}

		this._labelsAnimation.play();
	}

	_renderFirstLevel() {
		return (
			<div
				className="k-app-navigation__first-level"
				onMouseEnter={() => {
					this.setState({labels: 'first'});
				}}
				onMouseLeave={() => {
					this.setState({labels: null});
				}}>
				{this.props.firstLevel.map(key => {
					return (
						<div
							key={key}
							ref={this._refs.firstLevelItems[key]}
							className={[
								'k-app-navigation__first-level__item',
								`k-app-navigation__first-level__item__m-${key}`,
								this.props.selection[0] === key && 'k-app-navigation__first-level__item__m-active',
							].filter(Boolean).join(' ')}
							style={{
								opacity: 0,
								transform: 'rotateX(90deg)',
							}}
							onClick={() => {
								if (!isFunction(this.props.onChangeSelection)) {
									return;
								}

								this.props.onChangeSelection([key, null]);
							}}>
							<div
								className="k-app-navigation__first-level__item__icon"
								dangerouslySetInnerHTML={{__html: FIRST_LEVEL_DATA[key].icon}} />
							<div
								ref={this._refs.firstLevelItemsLabels[key]}
								className="k-app-navigation__first-level__item__label">
								<span className="k-app-navigation__first-level__item__label__text">
									{FIRST_LEVEL_DATA[key].title}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		)
	}

	_renderSecondLevel() {
		return (
			<div
				className="k-app-navigation__second-level"
				onMouseEnter={() => {
					this.setState({labels: 'second'});
				}}
				onMouseLeave={() => {
					this.setState({labels: null});
				}}>
				{this.state.secondLevel.map(key => {
					return (
						<div
							key={key}
							ref={this._refs.secondLevelItems[key]}
							className={[
								'k-app-navigation__second-level__item',
								`k-app-navigation__second-level__item__m-${key}`,
								this.props.selection[1] === key && 'k-app-navigation__second-level__item__m-active',
							].filter(Boolean).join(' ')}
							onClick={() => {
								if (!isFunction(this.props.onChangeSelection)) {
									return;
								}

								this.props.onChangeSelection([this.props.selection[0], this.props.selection[1] !== key ? key : null]);
							}}>
							<div
								className="k-app-navigation__second-level__item__icon"
								dangerouslySetInnerHTML={{__html: SECOND_LEVEL_DATA[key].icon}} />
							<div
								ref={this._refs.secondLevelItemsLabels[key]}
								className="k-app-navigation__second-level__item__label">
								<span className="k-app-navigation__second-level__item__label__text">
									{SECOND_LEVEL_DATA[key].title}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	render() {
		return (
			<div className="k-app-navigation">
				<div
					ref={this._refs.tip}
					className="k-app-navigation__tip"
					style={{
						opacity: 0.4,
						transform: 'translateY(10px)',
					}} />
				{this._renderFirstLevel()}
				{this._renderSecondLevel()}
			</div>
		)
	}
}
