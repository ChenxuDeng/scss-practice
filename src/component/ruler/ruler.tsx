import React from 'react'
import classes from './ruler.module.scss'
import cn from 'classnames'

type spacing='sm'|'md'|'lg'

export interface props{
    spacing?:spacing
}

const Ruler:React.FC<props>=(props)=>{
    const classNames=cn(classes.ruler,{
        [classes[`ruler_spacing_${props.spacing}`]]:props.spacing
    })

    return(
        <div className={classNames}>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map((number)=>{
                return <div className={classes.ruler_item} key={number}/>
            })}
        </div>
    )
}

export {Ruler}