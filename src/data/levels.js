const levels = {
	level1: {
		label: 1,
		name: 'level1',
		type: 'stack',
		items: {
			tile: {
				count: 1,
				variations: ['image'],
				value: { min: 1, max: 1 },
				groups: ['a'],
			},
			box: {
				count: 1,
				value: { min: 1, max: 1 },
				items: [],
			},
		},
	},
	level2: {
		label: 2,
		name: 'level2',
		type: 'stack',
		items: {
			tile: {
				count: 2,
				variations: ['image'],
				value: { min: 1, max: 1 },
				groups: ['a'],
			},
			box: {
				count: 1,
				value: { min: 2, max: 2 },
				items: [],
			},
		},
	},
};

export default levels;
