import React from "react";
import Svg, { Path } from "react-native-svg";
import { calcHeight, calcWidth } from '../metrics';

const Back = props => (
    <Svg width={props.params.width ? calcWidth(props.params.width) : calcWidth(16)}
        height={props.params.height ? calcHeight(props.params.height) : calcHeight(20)}
        style={[{ transform: [{ rotate: (props.params.rotateDegree ? props.params.rotateDegree : 180) + 'deg' }] }, props.params.style]}
        viewBox="0 0 10 16"{...props}>
        <Path
            d="M9.406 8.571l-8.168 7.193a1.01 1.01 0 01-1.3 0 .74.74 0 010-1.141l7.52-6.624-7.517-6.621a.741.741 0 010-1.142 1.01 1.01 0 011.3 0l8.166 7.193a.748.748 0 01-.001 1.142z"
            transform="translate(.328)"
            fill={props.params.color ? props.params.color : "white"}
        />
    </Svg>

);

export default Back;
