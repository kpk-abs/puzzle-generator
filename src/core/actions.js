const actions = {
	setCurrentLevel: ({ data }) => ({
		currentLevel: data,
	}),

	setPlaying: () => ({
		playing: 'start',
	}),

	setSetting: () => ({
		setting: 'start',
	}),
};

export default actions;
