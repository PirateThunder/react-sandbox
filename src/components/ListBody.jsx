import ListItemUI from "./ListItemUI";

const ListBody = (props) => {
    const cb = (item) => {
        console.log('work2')
        props.handleClick(item);
    }

    return (
        <div>
            {props.list.map((item) => (
                <ListItemUI hC={props.handleClick} key={item.id} text={item.text} />
            ))}
        </div>
    );
}

export default ListBody;