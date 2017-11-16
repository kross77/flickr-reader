import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';

const Label = styled.Text`
	font-family: OpenSans-Bold;
	font-size: 30px;
	text-align: center;
	width: 90%;
	opacity: ${({disabled = false}) => disabled ? 0.75 : 1};
	color: white;
`;


const Wrapper = styled.View`
	width: 90%;
	height: ${({height = 72}) => height};
	flex-direction: row;
	justify-content: center;
	align-items: center;	
	
`;

const Button = ({height, children, onPress, disabled}) => (
	<Wrapper onPress={disabled ? undefined  : onPress} height={height} disabled={disabled}>
		<Label disabled={disabled}>{children.toUpperCase()}</Label>
	</Wrapper>
);

const PageCounter = () => {

}

Button.propTypes = {
	height: PropTypes.string,
	children: PropTypes.any.isRequired,
	disabled: PropTypes.bool,
	onPress: PropTypes.func.isRequired,
};

export default Button;