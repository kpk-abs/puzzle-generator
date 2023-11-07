import { merge, reduce } from '@laufire/utils/collection';

const pipe = (pipes, data) => reduce(
	pipes, async (acc, c) => merge(
		{}, acc, await c(acc) || {}
	), data,
);

export {
	pipe,
};
