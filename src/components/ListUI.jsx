import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import ListItemUI from "./ListItemUI";
import { useState } from "react";

function ListUI(props) {
    const [value, setValue] = useState('');
    const [list, setList] = useState([
        {id: 1, text: 'test1'},
        {id: 2, text: 'test2'}
    ]);
    //<ListItemUI id={item.id} text={item.text} />
    // function handleClick() {
    //     console.log(value)
    //     setList([...list, {id: new Date().getMilliseconds(), text: value}])
    // }
    // <div>
    //     {list.map((item) => (
    //         <ListItemUI key={item.id} text={item.text} />
    //     ))}
    // </div>

    const handleClick = () => console.log('work');

    return (
        <div>
            <Input value={value} />
            <Button onClick={handleClick}>Add</Button>
            
        </div>
    );
}

export default ListUI;