import { useState } from "react";
function ToDo(){
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
    function handleChange(event) {
      const newValue = event.target.value;
        setInputText(newValue);
    }
    function addItem() {
        setItems(prevItems => {
          return [...prevItems, inputText];
        });
        setInputText("");
      }

    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Make a list:</h1>
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={addItem}>
              <span>Add</span>
            </button>
            <br/>
            <br/>
            <br/>
            <div>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
            
        </>
    );
};
export default ToDo;