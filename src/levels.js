const levels = [
	{
		name: 'level1',
		items: {
			tiles: [
				{
					display: 'image',
					value: 1,
				},
				{
					display: 'image',
					value: 1,
				},
			],
			boxes: [
				{
					maxTiles: 2,
				},
			],
		},
	},
	{
		name: 'level2',
		items: {
			tiles: [
				{
					display: 'image',
					value: 1,
				},
				{
					display: 'image',
					value: 2,
				},
			],
			boxes: [
				{
					maxTiles: 3,
				},
			],
		},
	},
];

export default levels;
