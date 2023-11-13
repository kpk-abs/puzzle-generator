import { React } from 'react';
import './App.scss';
import ticker from './services/ticker';
import Orientation from 'react-web-components/Orientation';
import GameScreen from './components/GameScreen';
import normalizeConfig from './services/normalizeConfig';
import { merge } from '@laufire/utils/collection';
import Once from './core/once';

const App = (context) => {
	const normalizedConfig = normalizeConfig.normalizeSprite(context);

	merge(context, { config: normalizedConfig });

	Once(() => ticker(context));

	return <div className="App">
		<Orientation lockOrientation="landscape">
			<GameScreen { ...context }/>
		</Orientation>
	</div>;
};

export default App;
