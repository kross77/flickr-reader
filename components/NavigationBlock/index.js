import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';
import Arrow from "../Arrow";
import KeywordBlock from "./KeywordBlock";
import Block from "../Block";


const ArrowView = styled.View`
	position: absolute;
	left: 0;
`;

const NavigationBlock = ({height = "72", label, tip, onBackPress, ...props}) => (
	<Block width="100%">
		<Block width="100%" height="8" color="#FF0084" />
		<Block direction="row" justify="center" align="center" height={height} {...props}>
			<ArrowView>
				<Arrow onPress={onBackPress}/>
			</ArrowView>
			<KeywordBlock label={label} tip={tip}/>
		</Block>
		<Block width="100%" height="8" color="#FF0084" />
	</Block>

);


NavigationBlock.propTypes = {
	height: PropTypes.string,
	label: PropTypes.string,
	tip: PropTypes.string,
	onBackPress: PropTypes.func.isRequired,
};

export default NavigationBlock;