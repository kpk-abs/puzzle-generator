import { find } from '@laufire/utils/collection';
import levels from '../data/levels';
import generateLevel from './generateLevel';
import { truthy } from '@laufire/utils/predicates';

const gameManager = {
	getLevel: ({ data: name }) => {
		const { data = [], time } = name && generateLevel(name);

		return {
			name,
			data,
			time,
		};
	},

	getNextLevel: (context) => {
		const { state: { level: { name }}} = context;
		const incremented = name.replace(/(\d+)$/, (match, number) =>
			Number(number) + 1);
		const levelData = find(levels, (level) =>
			level.name === incremented);

		return {
			data: levelData?.name,
			isNextLevel: truthy(levelData),
		};
	},
	updateDropItem: (context) => {
		const { state: { level }, data } = context;
		const { drag, drop } = data;
		const filteredData = level.data.filter((e) => e.id !== drag.id);
		const res = filteredData.map((element) => (drop.id === element.id
			? {
				...element,
				items: [...element.items, drag],
			}
			: element));

		return { ...level, data: res };
	},
};

export default gameManager;
