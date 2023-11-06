import { pipe } from '../helpers';
import generateTiles from './generateTiles';
import generateBox from './generateBox';

const buildSimpleStack = (context) => pipe([
	generateTiles,
	generateBox,
], context);

export default buildSimpleStack;
