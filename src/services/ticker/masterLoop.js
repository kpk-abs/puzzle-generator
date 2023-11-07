const masterLoops = [
];

const runMasterLoop = (context) =>
	masterLoops.forEach((data) => context.actions[data]());

const masterLoop = {
	runMasterLoop,
	masterLoops,
};

export default masterLoop;
