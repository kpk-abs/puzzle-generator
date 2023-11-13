import { Button } from '@mui/material';
import React from 'react';

const Levels = ({ actions }) =>
	<Button onClick={ () => actions.setLevel('') }>Levels</Button>;

export default Levels;
