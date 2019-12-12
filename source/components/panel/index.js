import React, {Component} from 'react';

import {SECOND_LEVEL_DATA} from '../../constants';

import './style.less';


export default class Panel extends Component {

	render() {
		const data = SECOND_LEVEL_DATA[this.props.selection] || {};

		return (
			<div className="k-app-panel">
				<div className="k-app-panel__header">
					<div className="k-app-panel__header__title">
						<div className="k-app-panel__header__title__image" dangerouslySetInnerHTML={{__html: data.icon}} />
						<div className="k-app-panel__header__title__text">
							{data.title}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
