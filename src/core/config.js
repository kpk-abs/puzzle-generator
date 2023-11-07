import levels from '../data/levels';

const config = {
	tickerDelay: 1000,
	size: 11,
	columnCount: 5,
	rowCount: 6,
	sprite: [
		{
			name: 'capsicum',
			index: 5,
		},
		{
			name: 'beetRoot',
			index: 6,
		},
		{
			name: 'carrot',
			index: 7,
		},
		{
			name: 'tomato',
			index: 8,
		},
		{
			name: 'brinjal',
			index: 9,
		},
		{
			index: 20,
		},
		{
			index: 21,
		},
		{
			index: 22,
		},
		{
			index: 25,
		},
		{
			index: 26,
		},
		{
			index: 27,
		},
	],
	data: {
		levels,
	},
};

export default config;
