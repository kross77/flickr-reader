import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import React from 'react';

const enhancer  = compose(
	defaultProps({resizeMode: 'contain', size: 'normal', source: require('../assets/logos/logo.png')}),
);
const Image = enhancer(styled.Text`
	width: 30px;
	height: 30px;
`);


const Wrapper = styled.TouchableOpacity`
	width: 45px;
	height: 45px;
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