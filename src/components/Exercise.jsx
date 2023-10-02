import { useState } from "react"

export default function Exercise() {

    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState(["Ready", "Set", "GO"]);

    function whateverThing(ev) {
        ev.preventDefault();
        setTodoList([...todoList, text]);
        setText("");
    }

  return (
    <div>
        <h1>React State Exercise</h1>
        <form onSubmit={whateverThing}>
            <label htmlFor="todoListInput">Input the next task: </label>
            <input 
                type="text"
                value={text}
                placeholder="Next Task"
                name="todoListInput"
                id="todoListInput"
                onChange={(ev) => setText(ev.target.value)}
            />
            <button>Add Item</button>
        </form>
        <ul>
            {todoList.map((element, index) => {
                return <li key={index}>{element}</li>
            })}
        </ul>
    </div>
  )
}
