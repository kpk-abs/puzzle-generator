import masterLoop from './masterLoop';

const ticker = (context) => {
	const { config: { tickerDelay }} = context;

	masterLoop.runMasterLoop(context);

	return setInterval(() => {
		masterLoop.runMasterLoop(context);
	}, tickerDelay);
};

export default ticker;
