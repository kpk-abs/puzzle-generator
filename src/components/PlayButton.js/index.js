import { Button } from '@mui/material';
import React from 'react';

const PlayButton = ({ actions }) =>
	<Button onClick={ () => { actions.setPlaying(); } }>PlayButton</Button>;

export default PlayButton;
