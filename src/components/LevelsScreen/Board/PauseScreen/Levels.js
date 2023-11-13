import { Button } from '@mui/material';
import React from 'react';

const Levels = ({ actions }) =>
	<Button onClick={ () => actions.setScreen('HomeScreen') }>Levels</Button>;

export default Levels;
