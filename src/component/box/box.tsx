import React, {ReactNode} from "react";
import classes from "./box.module.scss";

export interface props {
    children:ReactNode
}

const Box: React.FC<props> = (props) => {
    return (
        <div className={classes.box}>
            {props.children}
        </div>
    )
};

export {Box};