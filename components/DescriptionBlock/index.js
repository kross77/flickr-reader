import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';
import Arrow from "../Arrow";
import KeywordBlock from "./KeywordBlock";


const Wrapper = styled.View`
	width: 100%;
	padding: 10px;
	justify-content: center;
	align-items: center;
	background-color: #FF0084;	
`;

const Title = styled.Text`
	font-family: OpenSans-Bold;
	font-size: 16px;
	text-align: center;
	width: 100%;
	color: white;
`;

const Description = Title.extend`
	font-family: OpenSans-Light;
	font-size: 14px;
`;


const DescriptionBlock = ({title, description}) => (
	<Wrapper>
		<Title>{title}</Title>
		<Description>{description}</Description>
	</Wrapper>
);


DescriptionBlock.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default DescriptionBlock;