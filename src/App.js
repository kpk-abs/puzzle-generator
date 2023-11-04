import { React } from 'react';
import './App.scss';
import Tile from './components/Tile';
import normalizeConfig from './services/normalizeConfig';

const App = (context) => {
	const normalizedConfig = normalizeConfig(context);

	return <div className="App">
		<Tile {
			...{
				...context,
				data: { name: 'capsicum', value: 2, variation: 'image' },
				config: normalizedConfig,
			}
		}
		/>
	</div>;
};

export default App;
