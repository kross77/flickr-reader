import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {Animated} from 'react-native'

const Block = styled.View`
	${({width}) => width && `width: ${width}`};
	${({height}) => height && `height: ${height}`};
	${({direction}) => direction && `flex-direction: ${direction}`};
	${({flex}) => flex && `flex: ${flex}`};
	${({justify}) => justify && `justify-content: ${justify}`};
	${({align}) => align && `align-items: ${align}`};
	${({color}) => color && `background-color: ${color}`};
`;

Block.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	color: PropTypes.string,
	direction: PropTypes.oneOf(['row', 'column']),
	flex: PropTypes.number,
	justify: PropTypes.oneOf(["flex-start", "center", "flex-end", "space-around", "space-between"]),
	align: PropTypes.oneOf(["flex-start", "center", "flex-end", "stretch"]),
};



export const AnimatedBlock = Animated.createAnimatedComponent(Block);

export default Block;