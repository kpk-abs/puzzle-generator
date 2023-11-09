import { pipe } from '../../../helpers';
import generateTiles from './generateTiles';
import generateBoxes from './generateBoxes';

const buildSimpleStack = (context) => pipe([
	generateTiles,
	generateBoxes,
], context);

export default buildSimpleStack;
