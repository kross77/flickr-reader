import styled from 'styled-components/native';
import React from 'react';
import PropTypes from 'prop-types';

const Row = styled.View`
	flex: ${({flex = 1}) => flex};
	width: 100%;
	flex-direction: row;
`;

Row.propTypes = {
	flex: PropTypes.number,
};

export default Row;