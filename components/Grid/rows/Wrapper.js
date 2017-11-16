import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';
import Image from '../Image';


const Row = styled.View`
	flex: 1
`;

const Wrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;	
`;

const getImage = (index, images, onImageSelect) =>
	images[index] &&
	<Image onPress={() => onImageSelect(images[index])}
		   {...images[index]}/>;

const SecondColumn = ({images, onImageSelect}) => (
	<Wrapper height={height}>
		<Row>
			{getImage(0, images, onImageSelect)}
			{getImage(1, images, onImageSelect)}
		</Row>
		<Row>
			{getImage(2, images, onImageSelect)}
			{getImage(3, images, onImageSelect)}
		</Row>
		<Row>
			{getImage(4, images, onImageSelect)}
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