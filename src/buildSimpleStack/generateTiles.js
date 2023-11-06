import { map } from '@laufire/utils/collection';

const generateTiles = ({ tiles = [] }) => {
	const name = 'pencil';
	const type = 'tile';

	return {
		data: map(tiles, ({ value, display }) => ({
			name,
			display,
			type,
			value,
		})),
	};
};

export default generateTiles;
