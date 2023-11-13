import React from 'react';
import Levels from './Levels';
import RestartLevel from '../../RestartLevel';
import { Backdrop } from '@mui/material';
import Home from './Home';
import Play from './Play';

const PauseScreen = (context) => {
	const { actions, state: { pause }} = context;

	return (
		<Backdrop
			open={ pause }
			sx={ { zIndex: (theme) => theme.zIndex.drawer + 1 } }
			onClick={ () => actions.setPause(!pause) }
		>
			<Levels { ...context }/>
			<RestartLevel { ...context }/>
			<Home { ...context }/>
			<Play { ...context }/>
		</Backdrop>
	);
};

export default PauseScreen;