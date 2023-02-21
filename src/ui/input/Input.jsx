import { useState } from 'react';
import classes from './Input.module.css';

function Input(props) {
    const [value, setValue] = useState(props.value);

    return (
        <input className={classes.input} onInput={e => setValue(e.target.value)} value={value} />
    );  
}

export default Input;