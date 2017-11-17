import styled from 'styled-components/native';
import {Dimensions, Animated, Easing} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import FirstColumn from "./rows/FirstColumn";
import SecondColumn from "./rows/SecondColumn";
import {compose, defaultProps, withPropsOnChange} from "recompose";
import {AnimatedBlock} from "../Block";

const {width, height} = Dimensions.get('window');

const Wrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;	
	
`;

const aspectRatio = 301 / 378;
const AspectRatio = styled.View`
	flex-direction: row;
	width: ${({scale}) => width * scale};
	height: ${({scale}) => width / aspectRatio * scale};
	justify-content: center;
	align-items: center;	
	
`;

const firstRowIndexes = [0,5,7,8];
const secondRowIndexes = [1,2,3,4,6,9,10];

const getImagesForFirstRow = (images) => images.filter((v, i) => firstRowIndexes.findIndex(index => index === i) !== -1);
const getImagesForSecondRow = (images) => images.filter((v, i) => secondRowIndexes.findIndex(index => index === i) !== -1);

const enhancer = compose(
	defaultProps({loadingAnimation: new Animated.Value(0)}),
	withPropsOnChange(['loading'], ({loading, loadingAnimation}) => {
		Animated.timing(                  // Animate over time
			loadingAnimation,            // The animated value to drive
			{
				toValue: loading ? 1 : 0,
				easing: Easing.in(),
				duration: 750,              // Make it take a while
			}
		).start();
		return {loadingAnimation};
	})
)

const Grid = ({images, onImageSelect, loadingAnimation, scale=1}) => {

	let imagesForFirstRow = getImagesForFirstRow(images);
	let imagesForSecondRow = getImagesForSecondRow(images);
	//console.log('Grid -> render', {images, imagesForFirstRow, imagesForSecondRow});
	return(
		<Wrapper >
			<AspectRatio scale={scale}>
				<AnimatedBlock flex={1} style={{
					position: 'relative',
					opacity: loadingAnimation.interpolate({
						inputRange: [0, 0.5, 1],
						outputRange: [1, 0, 0],
					}),
					left: loadingAnimation.interpolate({
						inputRange: [0, 0.5, 1],
						outputRange: [0, -100, -100],
					})
				}}>
					<FirstColumn images={imagesForFirstRow} onImageSelect={onImageSelect}/>
				</AnimatedBlock>
				<AnimatedBlock flex={1} style={{
					position: 'relative',
					opacity: loadingAnimation.interpolate({
						inputRange: [0, 0.5, 1],
						outputRange: [1, 0, 0],
					}),
					left: loadingAnimation.interpolate({
						inputRange: [0, 0.5, 1],
						outputRange: [0, 100, 100],
					})
				}}>
				<SecondColumn images={imagesForSecondRow} onImageSelect={onImageSelect}/>
				</AnimatedBlock>
			</AspectRatio>
		</Wrapper>
	);
}


Grid.propTypes = {
	images: PropTypes.array,
	scale: PropTypes.number,
	onImageSelect: PropTypes.func.isRequired,
};

export default enhancer(Grid);