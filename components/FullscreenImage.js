import styled from 'styled-components/native';
import {compose, defaultProps, withPropsOnChange} from 'recompose';
import React from 'react';
import PropTypes from 'prop-types';

const apiKey = 'dd1f37406f619d661d5c40cddd1d5054';
const apiSecret = 'a3b602fa2a7cae3a';


const enhancer = compose(
	defaultProps({resizeMode: 'contain'}),
	withPropsOnChange(['id', 'secret',], ({id, farm, secret, server}) => ({
		source: {uri: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_k.jpg`}
	}))
);


const Wrapper = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Image = enhancer(styled.Image`
	width: 100%;
	height: 100%;
`);

const FullscreenImage = ({onPress, id, secret, server, farm, children}) => (
	<Wrapper onPress={onPress}>
		<Image {...{id, secret, server, farm}}>
			{children}
		</Image>
	</Wrapper>
);

FullscreenImage.propTypes = {
	id: PropTypes.string,
	secret: PropTypes.string,
	farm: PropTypes.number,
	server: PropTypes.string,
};

export default enhancer(FullscreenImage);