import { genTiles } from './genTiles.1';

const generateTiles = ({ tile, tiles }) => ({
	data: tiles || genTiles(tile),
});

export default generateTiles;
