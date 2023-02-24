import { useState } from 'react';
import classes from './Input.module.css';

function Input({children, ...props}) {
    const [value, setValue] = useState(props.value);

    return (
        <input {...props} className={classes.input} onInput={e => setValue(e.target.value)} value={value} />
    );  
}

export default Input;