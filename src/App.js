import { React, useEffect } from 'react';
import './App.scss';
import Tile from './components/Tile';
import normalizeConfig from './services/normalizeConfig';
import ticker from './services/ticker';
import Orientation from 'react-web-components/Orientation';

const App = (context) => {
	const normalizedConfig = normalizeConfig.normalizeSprite(context);

	useEffect(() => {
		ticker(context);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div className="App">
		<Orientation lockOrientation="landscape">
			<Tile {
				...{ ...context,
					data: {
						value: 1,
						variation: 'image',
						image: 'greenCapsicum',
						group: 'a',
					},
					config: normalizedConfig }
			}
			/></Orientation>
	</div>;
};

export default App;
