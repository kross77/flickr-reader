import styled from 'styled-components/native';
import {withState, compose, defaultProps} from 'recompose';
import React from 'react';
import PropTypes from 'prop-types';

const PADDING = 15;
const SIZE = 38;

const enhancer = compose(
	defaultProps({resizeMode: 'contain', source: require('../assets/arrow.png')}),
);
const Wrapper = styled.TouchableOpacity`
	width: ${PADDING+SIZE};
	height: ${PADDING+SIZE};
	justify-content: center;
	align-items: center;
`;

const Image = enhancer(styled.Image`
	width: ${SIZE};
	height: ${SIZE};
	opacity: ${({disabled = false}) => disabled ? 0.2 : 1};
	transform: scale(${({flip}) => flip ? -1 : 1}, 1);
`);

const Arrow = ({onPress, flip, disabled}) => (
	<Wrapper onPress={disabled ? undefined : onPress}>
		<Image disabled={disabled} flip={flip}/>
	</Wrapper>
);

Arrow.propTypes = {
	onPress: PropTypes.func.isRequired,
	flip: PropTypes.bool,
	disabled: PropTypes.bool,
};

export default enhancer(Arrow);