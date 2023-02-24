
import ListForm from "./ListForm";
import ListBody from "./ListBody";
import { useState } from "react";

function ListUI() {
    const [val, setVal] = useState('');
    const [list, setList] = useState([
        {id: 1, text: 'test1'},
        {id: 2, text: 'test2'}
    ]);

    const addItem = (newItem) => {
        setList([...list, newItem]);
    }

    const removeItem = (item) => {
        setList(list.filter(i => i.id !== item.id));
    }

    return (
        <div>
            <ListForm val={val} handleClick={addItem} />
            <ListBody handleClick={removeItem} list={list} />
        </div>
    );
}

export default ListUI;