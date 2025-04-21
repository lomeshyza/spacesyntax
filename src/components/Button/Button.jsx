import classes from "./Button.module.scss"

export default function Button({ children,isActive, ...props }) {

    return (<button {...props} className={isActive? `${classes.active} ${classes.button}`: classes.button} >{children}</button>)
}