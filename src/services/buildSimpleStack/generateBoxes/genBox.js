import { rndBetween } from '@laufire/utils/lib';
import { generateID } from '../../../helpers';

const genBox = ({ items = [], value: { min, max }}) => {
	const maxPosition = 101;

	return {
		id: generateID(),
		type: 'box',
		position: {
			x: rndBetween(0, maxPosition),
			y: rndBetween(0, maxPosition),
		},
		value: rndBetween(min, max),
		items: items,
	};
};

export default genBox;
