import { React, useEffect } from 'react';
import './App.scss';
import ticker from './services/ticker';
import Orientation from 'react-web-components/Orientation';
import GameScreen from './components/GameScreen';
import Example from './components/Example';

const App = (context) => {
	useEffect(() => {
		ticker(context);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div className="App">
		<Orientation lockOrientation="landscape">
			<GameScreen { ...context }/>
			<Example { ...{ ...context } }/>
		</Orientation>
	</div>;
};

export default App;
