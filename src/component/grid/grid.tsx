import React, {ReactNode} from 'react'
import classes from './grid.module.scss'
import cn from 'classnames'

type col=1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type spacing='sm'|'md'|'lg'
type justifyContent='center'|'flex-start'|'flex-end'|'space-between'
type alignItems='center'|'flex-start'|'flex-end'

export interface props{
    children:ReactNode,
    container?:boolean,
    item?:boolean,
    xs?:col,
    sm?:col,
    md?:col,
    lg?:col,
    spacing?:spacing,
    justifyContent?:justifyContent,
    alignItems?:alignItems,
    style?:any
}

const Grid: React.FC<props>=(props)=>{
    const classNames=cn({
        [classes.grid_container]:props.container,
        [classes.grid_item]:props.item,
        [classes[`grid_xs_${props.xs}`]]:props.xs,
        [classes[`grid_sm_${props.sm}`]]:props.sm,
        [classes[`grid_md_${props.md}`]]:props.md,
        [classes[`grid_lg_${props.lg}`]]:props.lg,//根据传入的col数字应用不同css
        [classes[`grid_spacing_${props.spacing}`]]:props.spacing,
        [classes[`grid_justifyContent_${props.justifyContent}`]]:props.justifyContent,
        [classes[`grid_alignItems_${props.alignItems}`]]:props.alignItems
    })

    return(
        <div className={classNames} {...props}>
            {props.children}
        </div>
    )
}

export {Grid}