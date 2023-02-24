import { useState } from "react";

function List(props) {
  // {children, ...props} = props;
  const [value, setValue] = useState('');
  const [list, setList] = useState(props.data || [
    {text: 'text1'},
    {text: 'text2'}
  ]);

  function updateList() {
    setList([...list, {text: value}]);
    setValue('');
  }

  return (
    <div>
      <input onInput={e => setValue(e.target.value)} value={value}/>
      <button onClick={updateList}>Update list</button>
      <h1>List: </h1>
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ol>
    </div>
  );
}

export default List;