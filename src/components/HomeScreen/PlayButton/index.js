import React from 'react';
import getStyle from '../../../helpers/getStyle.js';

const PlayButton = (context) => {
	const { actions } = context;

	return (
		<button
			className="gameButton"
			style={ getStyle({ ...context, data: { value: 'play' }}) }
			onClick={ () => { actions.setScreen('levels'); } }
		/>);
};

export default PlayButton;
