import levels from '../data/levels';

const config = {
	size: 11,
	columnCount: 5,
	rowCount: 4,
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
	],
	data: {
		levels,
	},
};

export default config;
