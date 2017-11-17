import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from "./Wrapper";
import Row from "./Row";
import getImage from "./getImage";


const FirstColumn = ({images, onImageSelect}) => (
	<Wrapper>
		<Row flex={2}>
			{getImage(0, images, onImageSelect, true)}
		</Row>
		<Row>
			{getImage(1, images, onImageSelect)}
			{getImage(2, images, onImageSelect)}
		</Row>
		<Row flex={2}>
			{getImage(3, images, onImageSelect, true)}
		</Row>
	</Wrapper>
);

FirstColumn.propTypes = {
	images: PropTypes.array,
	onImageSelect: PropTypes.func.isRequired,
};

export default FirstColumn;