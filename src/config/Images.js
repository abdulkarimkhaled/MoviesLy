
import * as React from 'react'

import Search from "./svgs/Search"
import Heart from "./svgs/Heart"
import Back from "./svgs/Back"



type Props = {
  source: "Search" | "Heart" | "Back"
  ,
  width?: Number,
  height?: Number,
  color?: String,
  rotateDegree?: Number,
  opacity?: Number,
  style?: Object,
  selected: Boolean
}

function Images(props: Props) {
  switch (props.source) {
    case 'Search':
      return <Search params={props} />;

    case 'Heart':
      return <Heart params={props} />;

    case 'Back':
      return <Back params={props} />;

    default:
      return null;
  }
}

export default Images;
