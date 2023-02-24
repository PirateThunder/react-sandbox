import Button from "../ui/button/Button";

function ListItemUI(props) {
    //console.log(props)
    const {id, text, handleClick} = {...props};
    const callback = () => {
        handleClick(id)
    }

    return (
        <div key={id} style={{border: '1px solid green', padding: '10px'}}>
            <p>{text}</p>
            <Button onClick={callback}>Delete</Button>
        </div>
    );
}

export default ListItemUI;