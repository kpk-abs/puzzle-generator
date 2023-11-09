import config from '../core/config';

const seed = {
	currentLevel: '',
	screen: 'HomeScreen',
	theme: config.themes[0].value,
	audio: true,
	music: true,
	audioStatus: { dragAudio: 'ready', bgAudio: 'ready' },
};

export default seed;
