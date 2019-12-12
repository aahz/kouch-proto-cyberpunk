import React, {Component} from 'react';

import './style.less';


export default class Logo extends Component {
	render() {
		return (
			<div className={['k-app-logo', this.props.active && 'k-app-logo__m-active'].filter(Boolean).join(' ')}>
				<svg className="k-app-logo__background" viewBox="0 0 80 80">
					<path
						d="M10 0 L55 0 L80 25 L80 70 L70 80 L0 80 L0 10 Z"
						fill="currentColor" />
				</svg>
				<div className="k-app-logo__image"></div>
			</div>
		)
	}
}
