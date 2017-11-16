import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Background = styled.View`
	background-color: #421F4E;
	flex: 1;
	justify-content: ${({justify = 'center'}) => justify};
	align-items: ${({align = 'center'}) => align};
`;

Background.propTypes = {
	justify: PropTypes.string,
	align: PropTypes.string,
};

export default Background;