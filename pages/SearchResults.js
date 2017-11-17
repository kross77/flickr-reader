import React from 'react'
import {Animated, Easing} from 'react-native'
import PropTypes from 'prop-types'
import {compose, defaultProps, withHandlers, withPropsOnChange} from 'recompose'
import Block, {AnimatedBlock} from "../components/Block";
import Logo from "../components/Logo";
import Background from "../components/Background";
import ActivityIndicator from "../components/ActivityIndicator";
import NavigationBlock from "../components/NavigationBlock";
import BottomNavigation from "../components/BottomNavigation";
import Grid from "../components/Grid/index";
import FullscreenImage from "../components/FullscreenImage";
import CloseButton from "../components/CloseButton";
import DescriptionBlock from "../components/DescriptionBlock/index";


const enhancer = compose(
	defaultProps({
		loadingAnimation: new Animated.Value(0),
		fullscreenImageAnimation: new Animated.Value(0),
	}),
	withPropsOnChange(['loading'], ({loading, loadingAnimation}) => {
		Animated.timing(                  // Animate over time
			loadingAnimation,            // The animated value to drive
			{
				toValue: loading ? 1 : 0,
				easing: Easing.back(),
				duration: 750,              // Make it take a while
			}
		).start();
		return {loading};
	}),
	withPropsOnChange(['selectedImage'], ({selectedImage, fullscreenImageAnimation}) => {
		if (selectedImage) {
			Animated.timing(                  // Animate over time
				fullscreenImageAnimation,            // The animated value to drive
				{
					toValue: 1,
					easing: Easing.in(),
					duration: 750,              // Make it take a while
				}
			).start();
		}
		return {selectedImage};
	}),
	withHandlers({
		closeImage: ({withHandlers, fullscreenImageAnimation, setSelectedImage}) => () => {
			Animated.timing(                  // Animate over time
				fullscreenImageAnimation,            // The animated value to drive
				{
					toValue: 0,
					easing: Easing.in(),
					duration: 750,              // Make it take a while
				}
			).start();
			setTimeout(() => setSelectedImage(null), 900)
		}
	})
	)
;

const SearchResults = ({
						   searchString = "Hello",
						   page,
						   pages,
						   images,
						   onImageSelect,
						   onBack,
						   onNext,
						   onPrev,
						   loading = false,
						   selectedImage,
						   loadingAnimation,
						   fullscreenImageAnimation,
						   closeImage
					   }) => (
	<Background justify="flex-start">
		<Block justify='center' height="90">
			<Logo size='small'/>
		</Block>
		<NavigationBlock label={searchString}
						 tip="it is your keywords:"
						 onBackPress={onBack}/>
		<Grid images={images}
			  scale={0.75}
			  loading={loading}
			  onImageSelect={onImageSelect}
		/>

		<AnimatedBlock align='center' justify='center' style={{
			position: 'absolute',
			top: "50%",
			width: 80,
			height: 80,
			opacity: loadingAnimation.interpolate({
				inputRange: [0, 0.5, 1],
				outputRange: [0, 0, 1],
			}),
			transform: [{
				scale: loadingAnimation.interpolate({
					inputRange: [0, 0.5, 1],
					outputRange: [0, 0, 1],
				})
			}],
		}}>
			<ActivityIndicator/>
		</AnimatedBlock>
		{selectedImage &&
		<AnimatedBlock width="100%" height="100%" align='center' justify='center' style={{
			position: 'absolute',
			backgroundColor: 'black',
			zIndex: 1,
			opacity: fullscreenImageAnimation.interpolate({
				inputRange: [0, 0.5, 1],
				outputRange: [0, 1, 1],
			}),
		}}>
			<AnimatedBlock width="100%" height="100%"
						   style={{
							   position: 'relative',
							   left: fullscreenImageAnimation.interpolate({
								   inputRange: [0, 0.25, 0.65, 1],
								   outputRange: [300, 300, 30, 0],
							   }),
							   borderRadius: 30,
							   opacity: fullscreenImageAnimation.interpolate({
								   inputRange: [0, 0.5, 1],
								   outputRange: [0, 0, 1],
							   }),

						   }}>
				<FullscreenImage {...selectedImage} />
			</AnimatedBlock>

			<AnimatedBlock width="60"
						   height="60"
						   color="white"
						   justify="center"
						   align="center"
						   style={{
							   position: 'absolute',
							   right: 10,
							   borderRadius: 30,
							   top: fullscreenImageAnimation.interpolate({
								   inputRange: [0, 0.5, 1],
								   outputRange: [-20, -20, 10],
							   }),
							   opacity: fullscreenImageAnimation.interpolate({
								   inputRange: [0, 0.5, 1],
								   outputRange: [0, 0, 1],
							   }),

						   }}>


				<CloseButton onPress={closeImage}/>
			</AnimatedBlock>
			{selectedImage.title &&
			<AnimatedBlock
				width="100%"
				color="white"
				justify="center"
				align="center"
				style={{
					position: 'absolute',
					borderRadius: 30,
					right: fullscreenImageAnimation.interpolate({
						inputRange: [0, 0.85, 1],
						outputRange: [400, 400, 0],
					}),
					bottom: 40,
					opacity: fullscreenImageAnimation.interpolate({
						inputRange: [0, 0.5, 1],
						outputRange: [0, 0, 1],
					}),

				}}>
				<DescriptionBlock title={String(selectedImage.title)} description={selectedImage.description['_content']}/>
			</AnimatedBlock>
			}

		</AnimatedBlock>}

		<BottomNavigation onPressRight={onNext}
						  onPressLeft={onPrev}
						  leftDisable={loading || page <= 1}
						  rightDisable={loading || page >= pages}
						  count={`${page}`}
						  tip=""
		/>
		<Block height="15"/>

	</Background>
);

SearchResults.propTypes = {
	onBack: PropTypes.func.isRequired,
	onNext: PropTypes.func.isRequired,
	onPrev: PropTypes.func.isRequired,
	onImageSelect: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	images: PropTypes.array,
};

export default enhancer(SearchResults);