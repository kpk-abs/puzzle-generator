import { Button } from '@mui/material';
import React from 'react';

const Home = ({ actions }) =>
	<Button onClick={ () => actions.setScreen('HomeScreen') }>Home</Button>;

export default Home;
