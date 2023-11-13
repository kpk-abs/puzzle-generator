import levels from '../data/levels';
import kids from '../Images/sprite.png';
import cartoon from '../Images/cartoon.png';

const width = 16;
const height = 9;

const config = {
	ratioMultiplier: {
		width: height / width,
		height: 1,
	},
	tickerDelay: 1000,
	size: 11,
	columnCount: 5,
	rowCount: 13,
	sprite: [
		{
			name: 'capsicum',
			index: 5,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'beetRoot',
			index: 6,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'carrot',
			index: 7,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'tomato',
			index: 8,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'brinjal',
			index: 9,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 1,
			index: 20,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 2,
			index: 21,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 3,
			index: 22,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 4,
			index: 25,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 5,
			index: 26,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 6,
			index: 27,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'greenCapsicum',
			index: 30,
			variance: {
				width: 1,
				height: 2,
			},
		},
		{
			name: 'redCapsicum',
			index: 31,
			variance: {
				width: 2,
				height: 1,
			},
		},
		{
			name: 'level',
			index: 55,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'back',
			index: 56,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'play',
			index: 57,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'musicOn',
			index: 58,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'setting',
			index: 59,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'audioOn',
			index: 60,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'audioOff',
			index: 61,
			variance: {
				width: 1,
				height: 1,
			},
		},
		{
			name: 'musicOff',
			index: 62,
			variance: {
				width: 1,
				height: 1,
			},
		},
	],
	data: {
		levels,
	},
	themes: [
		{
			label: 'Kids',
			value: 'kids',
			url: kids,
		},
		{
			label: 'Cartoon',
			value: 'cartoon',
			url: cartoon,
		},
	],
};

export default config;
