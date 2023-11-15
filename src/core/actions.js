import gameManager from '../services/gameManager';

const actions = {
	setLevel: (context) => ({
		level: gameManager.getLevel(context),
	}),

	reduceTime: (context) => ({
		level: gameManager.reduceTime(context),
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

	setPause: ({ data }) => ({
		pause: data,
	}),

	handleDrop: (context) => ({
		level: gameManager.updateDropItem(context),
	}),
};

export default actions;
