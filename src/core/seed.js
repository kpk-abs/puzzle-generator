import config from '../core/config';

const seed = {
	level: {
		name: '',
		data: [],
		time: {},
	},
	screen: 'home',
	theme: config.themes[0].value,
	audio: true,
	music: true,
	audioStatus: { dragAudio: 'ready', bgAudio: 'ready' },
	pause: false,
};

export default seed;
