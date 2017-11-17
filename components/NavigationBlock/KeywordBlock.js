import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';

const Label = styled.Text`
	font-family: OpenSans-Light;
	font-size: 30px;
	text-align: center;
	width: 100%;
	color: #FF0084;
`;

const Tip = Label.extend`
	font-family: OpenSans-Bold;
	font-size: 15px;
`;

const Wrapper = styled.View`
	height: ${({height = 62}) => height};
	justify-content: space-between;
	align-items: center;	
`;

const KeywordBlock = ({height, label = "Dogs", tip="swipe to navigate"}) => (
	<Wrapper height={height}>
		<Tip>{tip}</Tip>
		<Label>{label}</Label>
	</Wrapper>
);

KeywordBlock.propTypes = {
	height: PropTypes.string,
	count: PropTypes.string,
	tip: PropTypes.string,
};

export default KeywordBlock;