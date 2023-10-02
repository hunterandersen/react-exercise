import { useState } from "react"

export default function Example() {
    const [numbers, setNumbers] = useState([1, 3, 5, 7, 11, 13, 17]);
    //Initialize state for the color to start as black
    const [listColor, setListColor] = useState("#000");

    function handleChange(ev) {
        console.log(ev);
        setListColor(ev.target.value);
    }

    function handleSubmit(ev) {
        //Prevent the automatic page refresh
        ev.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorInput">Pick a color for your numbers</label>
            <input type="color" name="colorInput" id="colorInput" value={listColor} onChange={handleChange} />
            <button>Apply Color</button>
        </form>
        <h2>Prime Numbers</h2>
        <ul>
            {numbers.map((number, index) => {
                return <li style={{
                    color: listColor
                }} key={index}>{number}</li>
            })}
        </ul>
    </div>
  )
}
