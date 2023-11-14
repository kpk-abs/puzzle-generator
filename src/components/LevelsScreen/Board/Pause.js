import React from 'react';
import getStyle from '../../../helpers/getStyle';

const Pause = (context) => {
	const { actions, state: { pause }} = context;

	return (
		<button
			className="gameButton"
			style={ getStyle({ ...context, data: 'pause' }) }
			onClick={ () => { actions.setPause(!pause); } }
		/>);
};

export default Pause;
