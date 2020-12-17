
import * as React from 'react'

import Init from "./svgs/Init"



type Props = {
  source: "Init"
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
    case 'Init':
      return <Init params={props} />;

    default:
      return null;
  }
}

export default Images;
