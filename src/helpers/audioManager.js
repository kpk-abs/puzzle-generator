const onChange = (context) => {
	const { setState, state: { audioStatus }, event, data } = context;
	const { target } = event;

	target.value.status === 'ended' && setState((prev) => ({ ...prev,
		audioStatus: {
			...audioStatus,
			[data]: 'ready',
		}}));
};
const playAudio = (context) => {
	const { data, setState, state: { audioStatus }} = context;

	stopAudio(context);

	setState((prev) => ({ ...prev,
		audioStatus: {
			...audioStatus,
			[data]: 'playing',
		}}));
};
const stopAudio = (context) => {
	const { data, setState, state: { audioStatus }} = context;

	setState((prev) => ({ ...prev,
		audioStatus: {
			...audioStatus,
			[data]: 'ended',
		}}));
};

const staticProps = {
	type: 'audio',
	mode: 'normal',
	loop: false,
	controls: false,
	volume: 0.5,
	pip: false,
	played: 0,
	loaded: 0,
	duration: 0,
	playbackRate: 1.0,
};

const audioManager = {
	playAudio,
	onChange,
	staticProps,
};

export default audioManager;
