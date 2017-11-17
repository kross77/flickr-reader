import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';
import {Animated} from 'react-native';

const Label = styled.Text`
	font-family: OpenSans-Bold;
	font-size: 30px;
	text-align: center;
	width: 90%;
	opacity: ${({disabled}) => disabled ? 0.75 : 1};
	color: white;
`;


const Wrapper = styled.TouchableOpacity`
	width: 100%;
	height: ${({height = 50}) => height};
	background-color: ${({disabled}) => disabled ? 'grey' : '#FF0084'};
	justify-content: center;
	align-items: center;	
	
`;

const Button = ({height, children, onPress, disabled}) => (
	<Wrapper onPress={disabled ? undefined  : onPress} height={height} disabled={disabled}>
		<Label disabled={disabled}>{children.toUpperCase()}</Label>
	</Wrapper>
);

Button.propTypes = {
	height: PropTypes.string,
	children: PropTypes.any.isRequired,
	disabled: PropTypes.bool,
	onPress: PropTypes.func.isRequired,
};

export default Button;