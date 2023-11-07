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
			name: 1,
			index: 20,
		},
		{
			name: 2,
			index: 21,
		},
		{
			name: 3,
			index: 22,
		},
		{
			name: 4,
			index: 25,
		},
		{
			name: 5,
			index: 26,
		},
		{
			name: 6,
			index: 27,
		},
	],
	data: {
		levels,
	},
};

export default config;
