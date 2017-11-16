import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';

const Counter = styled.Text`
	font-family: OpenSans-Bold;
	font-size: 46px;
	text-align: center;
	width: 100%;
	opacity: ${({disabled = false}) => disabled ? 0.75 : 1};
	color: #FF0084;
`;

const Tip = Counter.extend`
	font-size: 15px;
`;


const Wrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;	
`;

const PageCounter = ({height, count = "1", tip="swipe to navigate"}) => (
	<Wrapper height={height}>
		<Counter>{count}</Counter>
		<Tip>{tip}</Tip>
	</Wrapper>
);

PageCounter.propTypes = {
	height: PropTypes.string,
	count: PropTypes.string,
	tip: PropTypes.string,
};

export default PageCounter;