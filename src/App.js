import { React } from 'react';
import './App.scss';
import Tile from './components/Tile';

const App = (context) =>
	<div className="App">
		<Tile { ...{ ...context, data: { name: 'brinjal', value: 1 }} }/>
	</div>;

export default App;
