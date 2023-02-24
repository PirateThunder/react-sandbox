import ListItemUI from "./ListItemUI";

const ListBody = (props) => {
    const {list, handleClick} = {...props};

    const callback = (item) => {
        handleClick(item);
    }

    return (
        <div>
            {list.map((item) => (
                <ListItemUI handleClick={callback} key={item.id} id={item.id} text={item.text} />
            ))}
        </div>
    );
}

export default ListBody;