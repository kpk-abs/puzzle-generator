import { map, merge } from '@laufire/utils/collection';

const getPosition = (context) => {
	const {
		data: { item: { index }},
		config: { columnCount, size },
	} = context;

	const x = index % columnCount;
	const y = (index - x) / columnCount;

	return {
		x: x * size,
		y: y * size,
	};
};

const normalizeConfig = {
	normalizeSprite: (context) => {
		const { config } = context;
		const { sprite } = config;
		const normalizedSprite = map(sprite, (item) => ({
			...item,
			...getPosition({ ...context, data: { item }}),
		}));

		return merge(
			config, { sprite: normalizedSprite }, {}
		);
	},
	normalizeDice: (context) => {
		const { config } = context;
		const { sprite } = config;
		const normalizedSprite = map(sprite, (item) => ({
			...item,
			...getPosition({ ...context, data: { item }}),
		}));

		return merge(
			config, { sprite: normalizedSprite }, {}
		);
	},
};

export default normalizeConfig;
