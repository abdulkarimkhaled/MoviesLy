import React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
import { calcHeight, calcWidth } from '../metrics';

const Heart = props => (
    <Svg viewBox="0 0 512 512" width={props.params.width ? calcWidth(props.params.width) : calcWidth(40)}
        height={props.params.height ? calcHeight(props.params.height) : calcHeight(40)} {...props}>

        <Path
            fill={props.params.color ? props.params.color : "#FFF"}
            d="M382 163.1c-34.8-34.8-91.2-34.8-126 0-34.8-34.8-91.2-34.8-126 0s-29.8 86.8 0 126C161.5 330.6 219.1 399 256 399c36.9 0 94.5-68.5 126-109.9 29.8-39.2 34.8-91.2 0-126z"
        />
    </Svg>
);

export default Heart;
