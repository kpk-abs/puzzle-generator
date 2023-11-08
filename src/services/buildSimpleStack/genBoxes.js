import { map, range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';
import { generateID } from '../../helpers';

const genBoxes = ({ count, items = [], value: { min, max }}) =>
	map(range(0, count), () => {
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
	});

export default genBoxes;
