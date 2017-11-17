import React from 'react'
import {Animated, Easing} from 'react-native'
import PropTypes from 'prop-types'
import {compose, defaultProps, withPropsOnChange, withState} from 'recompose'
import Block, {AnimatedBlock} from "../components/Block";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Background from "../components/Background";
import ActivityIndicator from "../components/ActivityIndicator";


const enhancer = compose(
	defaultProps({loadingAnimation: new Animated.Value(0)}),
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
	withState('searchString', 'setSearchString'),
	)
;


const Search = ({searchString, setSearchString, onSubmit, loading = false, loadingAnimation}) => (
	<Background>
		<Block flex={1.5} justify='center'>
			<AnimatedBlock style={{
				position: 'relative',
				top: loadingAnimation.interpolate({
					inputRange: [0, 0.5, 1],
					outputRange: [0, 0, 50],
				})
			}}>
				<Logo/>
			</AnimatedBlock>
		</Block>


		<Block flex={2} width="100%" align="center">
			<AnimatedBlock width="80%"

						   style={{
							   position: 'relative',
							   left: loadingAnimation.interpolate({
								   inputRange: [0, 0.5, 1],
								   outputRange: [0, -500, -500],
							   })
						   }}>
				<Input label="keywords" value={searchString} onChange={setSearchString}/>
				<Block width="100%" height="20"/>
				<Button onPress={() => onSubmit(searchString)}
						disabled={!searchString || searchString.length < 2}>
					Search
				</Button>
			</AnimatedBlock>
		</Block>


		<AnimatedBlock align='center' justify='center' style={{
			position: 'absolute',
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


	</Background>
);

Search.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	loading: PropTypes.bool,
};

export default enhancer(Search);