import styled from 'styled-components/native';
import {withState, compose, defaultProps, withPropsOnChange} from 'recompose';
import React from 'react';
import PropTypes from 'prop-types';

const apiKey = 'dd1f37406f619d661d5c40cddd1d5054';
const apiSecret = 'a3b602fa2a7cae3a';


const enhancer = compose(
	defaultProps({resizeMode: 'contain'}),
	withPropsOnChange(['id', 'secret', 'isBig'], ({id, isBig, secret, server}) => ({
		source: {uri: `https://staticflickr.com/${server}/${id}_${secret}_${isBig ? 'q' : 's'}.jpg`}
	}))
);
const Wrapper = styled.TouchableOpacity`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	border-width: 2;
	border-color: #FF0084;
	border-style: solid;
`;

const Image = enhancer(styled.Image`
	width: 100%;
	height: 100%;
	opacity: ${({disabled = false}) => disabled ? 0.7 : 1};
	margin: 4;
`);

const ImageItem = ({onPress, id, secret, server}) => (
	<Wrapper onPress={disabled ? undefined : onPress}>
		<Image {...{id, secret, server}} />
	</Wrapper>
);

ImageItem.propTypes = {
	onPress: PropTypes.func.isRequired,
	id: PropTypes.string,
	secret: PropTypes.string,
	server: PropTypes.string,
	isBig: PropTypes.bool,
};

export default enhancer(ImageItem);