import styled from 'styled-components/native';
import {withState, compose, defaultProps} from 'recompose';
import PropTypes from 'prop-types';

const enhancer  = compose(
	defaultProps({color: '#FF0084'}),
	withState('source', 'setSource', require('../assets/logos/logo.png')),
);
const ActivityIndicator = styled.ActivityIndicator`
	transform: scale(4);
`;

ActivityIndicator.propTypes = {
	size: PropTypes.oneOf(['normal', 'small', 'xsmall']),
};

export default enhancer(ActivityIndicator);