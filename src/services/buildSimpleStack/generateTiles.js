import { genTiles } from './genTiles';

const generateTiles = ({ tile, tiles }) => ({
	data: tiles || genTiles(tile),
});

export default generateTiles;
