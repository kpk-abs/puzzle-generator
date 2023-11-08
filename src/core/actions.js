const actions = {
	setCurrentLevel: ({ data }) => ({
		currentLevel: data,
	}),

	setPlaying: () => ({
		playing: 'start',
	}),
};

export default actions;
