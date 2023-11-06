import { map, range } from '@laufire/utils/collection';

const generateTiles = ({ value }) => {
	const name = 'pencil';
	const type = 'tile';

	return {
		data: map(range(0, value), () => ({
			name: name,
			type: type,
			value: 1,
		})),
	};
};

export default generateTiles;
