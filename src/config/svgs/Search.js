import React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
import { calcHeight, calcWidth } from '../metrics';

const Search = props => (
    <Svg viewBox="0 0 24 24" width={props.params.width ? calcWidth(props.params.width) : calcWidth(24)}
        height={props.params.height ? calcHeight(props.params.height) : calcHeight(24)} {...props}>
        <Path fill={props.params.color ? props.params.color : "#fff"} d="M13.262 14.867l2.48 2.48c-.379.723-.418 1.442-.02 1.84l4.528 4.528c.57.57 1.813.258 2.766-.7.957-.956 1.27-2.195.699-2.765l-4.524-4.527c-.402-.399-1.12-.36-1.843.015l-2.48-2.476zM8.5 0A8.499 8.499 0 000 8.5C0 13.195 3.805 17 8.5 17S17 13.195 17 8.5 13.195 0 8.5 0zm0 15a6.5 6.5 0 110-13 6.5 6.5 0 010 13z" />
    </Svg>
);

export default Search;
