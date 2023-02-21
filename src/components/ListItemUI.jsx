import { useState } from "react";
import Button from "../ui/button/Button";

function ListItemUI(props) {
    //const [text, setText] = useState(text);

    return (
        <div key={props.id} style={{border: '1px solid green', padding: '10px'}}>
            <p>{props.text}</p>
            <Button>Delete</Button>
        </div>
    );
}

export default ListItemUI;