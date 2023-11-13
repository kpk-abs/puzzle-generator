import generateLevel from './generateLevel';

const gameManager = {
	getLevel: ({ data: name }) => {
		const { data } = generateLevel(name);

		return {
			name,
			data,
		};
	},
};

export default gameManager;
