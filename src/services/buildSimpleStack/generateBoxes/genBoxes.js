import { map, range } from '@laufire/utils/collection';
import genBox from './genBox';

const genBoxes = (box) => map(range(0, box.count), () => genBox(box));

export default genBoxes;
