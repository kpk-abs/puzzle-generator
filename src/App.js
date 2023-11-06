import { React } from 'react';
import './App.scss';
import Tile from './components/Tile';
import normalizeConfig from './services/normalizeConfig';

const App = (context) => {
	const normalizedConfig = normalizeConfig.normalizeSprite(context);

	return <div className="App">
		<Tile {
			...{
				...context,
				data: { name: 'carrot', value: 3, variation: 'number' },
				config: normalizedConfig,
			}
		}
		/>
	</div>;
};

export default App;
