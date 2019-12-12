import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Player from './components/player';

import Logo from './components/logo';
import Navigation from './components/navigation';
import Panel from './components/panel';

import {FIRST_LEVEL, SECOND_LEVEL} from './constants';

import './applicaton.less';

class Application extends Component {
	constructor(props, ...args) {
		super(props, ...args);

		this.state = {
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
			<div className="k-app">
				<Player
					onMouseEnter={() => {
						this.setState({active: true})
					}}
					onMouseMove={(x, y) => {
						const usable = x < 1280 * 0.65;

						if (this.state.usable !== usable) {
							this.setState({usable});
						}
					}}
					onMouseLeave={() => {
						this.setState({active: false})
					}}>
					<Panel
						active={this.state.active && this.state.usable && !!this.state.selection[1]}
						selection={this.state.selection[1]}/>
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
