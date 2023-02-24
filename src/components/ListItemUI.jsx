import Button from "../ui/button/Button";

function ListItemUI(props) {
    const cb = () => {
        console.log(props)
        props.hC(props)
    }

    return (
        <div key={props.id} style={{border: '1px solid green', padding: '10px'}}>
            <p>{props.text}</p>
            <Button onClick={cb}>Delete</Button>
        </div>
    );
}

export default ListItemUI;