import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import { useState } from "react";

const ListForm = (props) => {
    const [val, setVal] = useState('');

    const addNewItem = () => {
        setVal('');
        const newItem = {id: Date.now(), text: val};
        props.handleClick(newItem);
    }

    return (
        <div>
            <Input onInput={(e) => setVal(e.target.value)} value={val} />
            <Button onClick={addNewItem}>Add</Button>
        </div>
    );
}

export default ListForm;