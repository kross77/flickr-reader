import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';
import Arrow from "../Arrow";
import PageCounter from "./PageCounter";


const Wrapper = styled.View`
	width: 90%;
	height: ${({height = 72}) => height};
	flex-direction: row;
	justify-content: center;
	align-items: center;	
	
`;

const NavigationBlock = ({height, count, tip, onPressLeft, leftDisable, onPressRight, rightDisable}) => (
	<Wrapper  height={height} >
		<Arrow onPress={onPressLeft} disabled={leftDisable}/>
		<PageCounter count={count} tip={tip}/>
		<Arrow onPress={onPressRight} disabled={rightDisable} flip={true}/>
	</Wrapper>
);


NavigationBlock.propTypes = {
	height: PropTypes.string,
	count: PropTypes.string,
	tip: PropTypes.string,
	onPressLeft: PropTypes.func.isRequired,
	onPressRight: PropTypes.func.isRequired,
	leftDisable: PropTypes.bool,
	rightDisable: PropTypes.bool,
};

export default NavigationBlock;