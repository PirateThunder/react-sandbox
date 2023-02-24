import ListForm from "./ListForm";
import ListBody from "./ListBody";
import { useState } from "react";

const ListUI = () =>  {
    const [list, setList] = useState([
        {id: 1, text: 'test1'},
        {id: 2, text: 'test2'}
    ]);

    const addItem = (newItem) => {
        setList([...list, newItem]);
    }

    const removeItem = (id) => {
        setList(list.filter(i => i.id !== id));
    }

    return (
        <div>
            <ListForm handleClick={addItem} />
            {list.length !== 0
                ? <ListBody handleClick={removeItem} list={list} />
                : <h2>Empty!</h2>
            }
        </div>
    );
}

export default ListUI;