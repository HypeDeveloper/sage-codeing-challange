import React from 'react'
import { fontVariants } from '../utils/variants'
import { getVariation } from '../utils/variations'

function BrandText(props) {
    let TextData = getVariation(fontVariants, props.type, 3)
    const style = {
        fontSize: TextData.size,
        fontWeight: TextData.weight,
        textAlign: props.align || 'left',
        padding: props.space || '2px',
        color: props.color || 'black'
    }

    return (
        <p style={style} className={TextData.style}>{ props.children }</p>
  )
}

export default BrandText