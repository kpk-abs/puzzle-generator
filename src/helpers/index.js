import { merge, reduce } from '@laufire/utils/collection';

const pipe = (pipes, data) => reduce(
	pipes, (acc, c) => merge(
		{}, acc, c(acc) || {}
	), data,
);

const generateID = Symbol;

export {
	pipe,
	generateID,
};
