import React from 'react';
import { Button } from '@mui/material';

const PlayButton = ({ actions }) =>
	<Button onClick={ () => { actions.setScreen('LevelsScreen'); } }>
		PlayButton
	</Button>;

export default PlayButton;
