import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';

const Label = styled.Text`
	font-family: OpenSans-Bold;
	font-size: 15px;
	color: #FF0084;
`;
const TextInput = styled.TextInput`
	border-width: 3;
	border-color: #FF0084;
	border-style: solid;
	height: 44;
	font-size: 27;
	padding-left: 9;
	padding-right: 9;
	color: white;
`;

const Wrapper = styled.View`
	width: 100%;
	height: ${({height = 64}) => height};
	justify-content: space-between;
`;

const Input = ({value, height, label='', onChange}) => (
	<Wrapper height={height}>
		<Label>{label.toUpperCase()}</Label>
		<TextInput value={value} onChange={({target: {value}}) => onChange(value)}/>
	</Wrapper>
);

Input.propTypes = {
	label: PropTypes.string,
	height: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default Input;