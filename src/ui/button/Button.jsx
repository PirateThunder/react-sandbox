import classes from './Button.module.css';

function Button(props) {
    return (
        <button {...props} className={classes.btn}>
            {props.children}
        </button>
    );
}

export default Button;