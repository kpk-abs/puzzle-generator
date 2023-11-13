import gameManager from '../services/gameManager';

const actions = {
	setLevel: (context) => ({
		level: gameManager.getLevel(context),
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
