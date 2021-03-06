import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Player from './components/player';

import Background from './components/background';
import Logo from './components/logo';
import Navigation from './components/navigation';
import Panel from './components/panel';

import {FIRST_LEVEL, SECOND_LEVEL} from './constants';

import './applicaton.less';

class Application extends Component {
	constructor(props, ...args) {
		super(props, ...args);

		this.state = {
			theme: 'black',
			active: false,
			usable: false,
			firstLevel: Object.values(FIRST_LEVEL),
			secondLevel: Object.values(SECOND_LEVEL).filter(value => value.startsWith(FIRST_LEVEL.GAME)),
			selection: [FIRST_LEVEL.GAME, null],
		};
	}

	_onChangeSelection(selection) {
		this.setState({
			selection: selection,
			secondLevel: Object.values(SECOND_LEVEL).filter(value => value.startsWith(selection[0])),
		});
	}

	render() {
		return (
			<div className={['k-app', `k-app__m-${this.state.theme}`].join(' ')}>
				<div className="k-app__theme-selector">
					<button
						className={['k-app__theme-selector__button', this.state.theme === 'black' && 'k-app__theme-selector__button__m-active'].filter(Boolean).join(' ')}
						onClick={() => {
							this.setState({theme: 'black'})
						}}>
						Black
					</button>
					<button
						className={['k-app__theme-selector__button', this.state.theme === 'white' && 'k-app__theme-selector__button__m-active'].filter(Boolean).join(' ')}
						onClick={() => {
							this.setState({theme: 'white'})
						}}>
						White
					</button>
				</div>
				<Player
					onMouseEnter={() => {
						this.setState({active: true})
					}}
					onMouseMove={(x, y) => {
						const usable = x < 1280 * 0.7;

						if (this.state.usable !== usable) {
							this.setState({usable});
						}
					}}
					onMouseLeave={() => {
						this.setState({active: false})
					}}>
					<Background active={this.state.active && this.state.usable} />
					<Panel
						active={this.state.active && this.state.usable && !!this.state.selection[1]}
						selection={this.state.selection}
						onChangeSelection={this._onChangeSelection.bind(this)} />
					<Navigation
						activeFirst={this.state.active}
						activeSecond={this.state.active && this.state.usable}
						firstLevel={this.state.firstLevel}
						secondLevel={this.state.secondLevel}
						selection={this.state.selection}
						onChangeSelection={this._onChangeSelection.bind(this)} />
					<Logo active={this.state.active} />
				</Player>
			</div>
		);
	}
}

ReactDOM.render(
	<Application />,
	window.document.getElementById('root')
);
