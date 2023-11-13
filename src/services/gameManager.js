import generateLevel from './generateLevel';

const gameManager = {
	getLevel: ({ data: name }) => {
		const { data = [] } = name && generateLevel(name);

		return {
			name,
			data,
		};
	},
};

export default gameManager;
