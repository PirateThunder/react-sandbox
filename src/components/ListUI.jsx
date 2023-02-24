import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import ListItemUI from "./ListItemUI";
import { useState } from "react";

function ListUI(props) {
    const [value, setValue] = useState('');
    const [list, setList] = useState([
        // {id: 1, text: 'test1'},
        // {id: 2, text: 'test2'}
    ]);

    const handleClick = () => {
        setList([...list, {
            id: new Date().getMilliseconds(), 
            text: value
        }]);
        setValue('');
    }

    return (
        <div>
            <Input onInput={(e) => setValue(e.target.value)} value={value} />
            <h1>{value}</h1>
            <Button onClick={handleClick}>Add</Button>
            <div>
                {list.map((item) => (
                    <ListItemUI key={item.id} text={item.text} />
                ))}
            </div>
        </div>
    );
}

export default ListUI;