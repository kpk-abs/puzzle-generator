import React from 'react';
import BoardComponent from '../components/LevelsScreen/Board';
import '../App.scss';
import context from './helper/context';
import generateLevel from '../services/generateLevel';

const component = {
	title: 'Components/Board',
};

export default component;

const Template = (args) =>
	<BoardComponent { ...{ ...context, ...args } }/>;

export const Board = Template.bind({});

const { data } = generateLevel('level1');

Board.args = {
	data,
};
