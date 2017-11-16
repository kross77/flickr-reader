import styled from 'styled-components/native';
import {withState, compose, defaultProps} from 'recompose';
import PropTypes from 'prop-types';

const Sizes = {
	normal: [244, 131],
	small: [122, 65],
	xsmall: [61, 34],
};

const enhancer  = compose(
	defaultProps({resizeMode: 'contain', size: 'normal',}),
	withState('source', 'setSource', require('../assets/logos/logo.png')),
);
const Logo = styled.Image`
	width: ${({size = "normal"}) => Sizes[size][0]};
	height: ${({size = "normal"}) => Sizes[size][1]};
`;

Logo.propTypes = {
	size: PropTypes.oneOf(['normal', 'small', 'xsmall']),
};

export default enhancer(Logo);