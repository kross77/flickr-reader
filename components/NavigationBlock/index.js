import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';
import Arrow from "../Arrow";
import KeywordBlock from "./KeywordBlock";


const Wrapper = styled.View`
	width: 90%;
	height: ${({height = 72}) => height};
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const ArrowView = styled.View`
	position: absolute;
	left: 0;
`;

const NavigationBlock = ({height, label, tip, onBackPress, ...props}) => (
	<Wrapper  height={height} {...props}>
		<ArrowView>
			<Arrow onPress={onBackPress}/>
		</ArrowView>
		<KeywordBlock label={label} tip={tip}/>
	</Wrapper>
);


NavigationBlock.propTypes = {
	height: PropTypes.string,
	label: PropTypes.string,
	tip: PropTypes.string,
	onBackPress: PropTypes.func.isRequired,
};

export default NavigationBlock;