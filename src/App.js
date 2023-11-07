import { React, useEffect } from 'react';
import './App.scss';
import Tile from './components/Tile';
import normalizeConfig from './services/normalizeConfig';
import ticker from './services/ticker';

const App = (context) => {
	const normalizedConfig = normalizeConfig.normalizeSprite(context);

	useEffect(() => {
		ticker(context);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div className="App">
		<Tile {
			...{
				...context,
				data: { name: 'brinjal', value: 5, variation: 'dice' },
				config: normalizedConfig,
			}
		}
		/>
	</div>;
};

export default App;
