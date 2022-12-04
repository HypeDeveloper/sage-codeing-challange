import React from 'react'
import { logoVariants } from '../utils/variants'
import { getVariation } from '../utils/variations'

export default function Logo(props) {
  var fontData = getVariation(logoVariants, props.size, 2)
    const style = {
      fontSize: fontData.size,
      fontWeight: '800' // change this
    }
  return (
    <p style={style}>ARTSY.</p>
  )
}

