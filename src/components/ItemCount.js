import { useState } from "react"

const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    const clickHandler = () => {
        setCounter(counter + 1)
    }
    const clickMenos = () => {
        setCounter(counter - 1)
    }

    return (
        <tr>
            <th>
                <button onClick={clickHandler} className="btn">+</button>
                
            </th>
            <th>{counter}</th>
            <th>
                <button onClick={clickMenos} className="btn">-</button>
                
            </th>
        </tr>
    )



}
export default ItemCount