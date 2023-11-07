import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import updateContext from '@laufire/resist';
import './index.css';
import App from './App';
import context from './core/context';

const Entry = () => {
	const [state, setState] = useState(context.seed);

	useEffect(context.init, []);
	updateContext(context, { state, setState });

	return App(context);
};


const container = document.getElementById('root');
const root = createRoot(container);


root.render(<React.StrictMode>
		<Entry />
</React.StrictMode>);
