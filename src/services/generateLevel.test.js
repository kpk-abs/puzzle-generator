import { peek } from '@laufire/utils/debug';
import generateLevel from './generateLevel';

describe('generateLevel', () => {
	test('call', () => {
		const res = generateLevel('level2');

		peek(res);
	});
});
