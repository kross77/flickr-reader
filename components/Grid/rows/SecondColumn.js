import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from "./Wrapper";
import Row from "./Row";
import getImage from "./getImage";


const SecondColumn = ({images, onImageSelect}) => (
	<Wrapper>
		<Row>
			{getImage(0, images, onImageSelect)}
			{getImage(1, images, onImageSelect)}
		</Row>
		<Row>
			{getImage(2, images, onImageSelect)}
			{getImage(3, images, onImageSelect)}
		</Row>
		<Row flex={2}>
			{getImage(4, images, onImageSelect, true)}
		</Row>
		<Row>
			{getImage(5, images, onImageSelect)}
			{getImage(6, images, onImageSelect)}
		</Row>
	</Wrapper>
);

SecondColumn.propTypes = {
	images: PropTypes.array,
	onImageSelect: PropTypes.func.isRequired,
};

export default SecondColumn;