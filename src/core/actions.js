const actions = {
	setCurrentLevel: ({ data }) => ({
		currentLevel: data,
	}),

	setScreen: ({ data }) => ({
		screen: data,
	}),

	setAudio: ({ data }) => ({
		audio: data,
	}),

	setMusic: ({ data }) => ({
		music: data,
	}),

	setTheme: ({ data }) => ({
		theme: data,
	}),
};

export default actions;
