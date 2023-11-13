import React from 'react';
import getStyle from '../../helpers/getStyle';

const BackButton = (context) => {
	const { actions } = context;

	return (
		<button
			className="gameButton back"
			style={ getStyle({ ...context, data: { value: 'back' }}) }
			onClick={ () => actions.setScreen('home') }
		/>);
};

export default BackButton;
