import React, {Component} from 'react';

import times from 'lodash/times';

import './style.less';


export default class Background extends Component {
	render() {
		return (
			<div className={['k-app-background', this.props.active && 'k-app-background__m-active'].filter(Boolean).join(' ')}>
				{times(250, (index => {
					return (
						<div key={index} className="k-app-background__line" />
					)
				}))}
			</div>
		)
	}
}
