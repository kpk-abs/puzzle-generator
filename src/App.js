import { React } from 'react';
import './App.scss';
import Tile from './components/Tile';

const App = (context) =>
	<div className="App">
		<Tile { ...{ ...context, data: { name: 'capsicum', value: 2 }} }/>
	</div>;

export default App;
