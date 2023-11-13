import { Button } from '@mui/material';
import React from 'react';

const Play = ({ actions, state: { pause }}) =>
	<Button onClick={ () => actions.setPause(!pause) }>play</Button>;

export default Play;
