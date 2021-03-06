import styled from 'styled-components/native';
import {withState, compose, defaultProps, withPropsOnChange} from 'recompose';
import React from 'react';
import PropTypes from 'prop-types';




const enhancer = compose(
	defaultProps({resizeMode: 'contain'}),
	withPropsOnChange(['id', 'secret', 'isBig'], ({id, farm, isBig, secret, server}) => ({
		source: {uri: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${isBig ? 'q' : 's'}.jpg`}
	}))
);
const Wrapper = styled.TouchableOpacity`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 5px;
`;
const Border = styled.View`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	border-width: 2px;
	border-color: #FF0084;
	border-style: solid;
	padding: 4px;
`;

const Image = enhancer(styled.Image`
	width: 100%;
	height: 100%;
`);

const ImageItem = ({onPress, id, secret, server, farm, isBig}) => (
	<Wrapper onPress={onPress}>
		<Border>
			<Image {...{id, secret, server, farm, isBig}} />
		</Border>

	</Wrapper>
);

ImageItem.propTypes = {
	onPress: PropTypes.func.isRequired,
	id: PropTypes.string,
	secret: PropTypes.string,
	farm: PropTypes.number,
	server: PropTypes.string,
	isBig: PropTypes.bool,
};

export default enhancer(ImageItem);