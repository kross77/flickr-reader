import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import FirstColumn from "./rows/FirstColumn";
import SecondColumn from "./rows/SecondColumn";

const {width, height} = Dimensions.get('window');

const deviceAspectRatio = width / height;

const Wrapper = styled.View`
	flex: 1;
	
	justify-content: center;
	align-items: center;	
	
`;

const aspectRatio = 301 / 378;
const AspectRatio = styled.View`
	flex-direction: row;
	width: ${width};
	height: ${width / aspectRatio};
	justify-content: center;
	align-items: center;	
	
`;

const firstRowIndexes = [0,5,7,8];
const secondRowIndexes = [1,2,3,4,6,9,10];

const getImagesForFirstRow = (images) => images.filter((v, i) => firstRowIndexes.findIndex(index => index === i) !== -1);
const getImagesForSecondRow = (images) => images.filter((v, i) => secondRowIndexes.findIndex(index => index === i) !== -1);

const Grid = ({images, onImageSelect}) => {

	let imagesForFirstRow = getImagesForFirstRow(images);
	let imagesForSecondRow = getImagesForSecondRow(images);
	console.log('Grid -> render', {images, imagesForFirstRow, imagesForSecondRow});
	return(
		<Wrapper >
			<AspectRatio>
				<FirstColumn images={imagesForFirstRow} onImageSelect={onImageSelect}/>
				<SecondColumn images={imagesForSecondRow} onImageSelect={onImageSelect}/>
			</AspectRatio>
		</Wrapper>
	);
}


Grid.propTypes = {
	images: PropTypes.array,
	onImageSelect: PropTypes.func.isRequired,
};

export default Grid;