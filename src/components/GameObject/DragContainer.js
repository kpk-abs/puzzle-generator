/* eslint-disable id-match */
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Preview } from 'react-dnd-preview';
import Tile from '../Tile';
import context from '../../core/context';

const generatePreview = ({ item: data, style }) =>
	<div className="itemPreview" style={ style }>
		<Tile { ...{ ...context, data } }/>
	</div>;

const isMobile = (/iPhone|iPad|iPod|Android/i).test(navigator.userAgent);

const DragContainer = ({ children }) => {
	const backend = isMobile ? TouchBackend : HTML5Backend;

	return (
		<DndProvider backend={ backend }>
			{children}
			<Preview generator={ generatePreview }/>
		</DndProvider>
	);
};

export default DragContainer;
