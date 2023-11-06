const levels = {
	level1: {
		type: 'stack',
		items: {
			tile: {
				count: 1,
				variation: ['image'],
				value: { min: 1, max: 1 },
				group: ['a'],
			},
			boxes: {
				value: { min: 1, max: 1 },
			},
		},
	},
	level2: {
		type: 'stack',
		items: {
			tile: {
				count: 2,
				variation: ['image'],
				value: { min: 1, max: 1 },
				group: ['a'],
			},
			boxes: {
				value: { min: 2, max: 2 },
			},
		},
	},
};

export default levels;
