import styled from 'styled-components/native';
import {compose, defaultProps} from 'recompose';
import PropTypes from 'prop-types';
import React from 'react';

const enhancer  = compose(
	defaultProps({resizeMode: 'contain', source: require('../assets/close-button.png')}),
);
const Image = enhancer(styled.Image`
	width: 30px;
	height: 30px;
`);


const Wrapper = styled.TouchableOpacity`
	width: 50px;
	height: 50px;
	justify-content: center;
	align-items: center;	
`;

const CloseButton = ({onPress}) => (
	<Wrapper onPress={onPress}>
		<Image/>
	</Wrapper>
);

CloseButton.propTypes = {
	onPress: PropTypes.func.isRequired,
};

export default CloseButton;