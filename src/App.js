import './App.css';
import {useState} from "react";

const initialCounters = [
    {id: 1, value: 100},
    {id: 2, value: 200},
    {id: 3, value: 300},
    {id: 4, value: 400},
    {id: 5, value: 500},

]

function App() {
    const [counters, setCounters] = useState(initialCounters);
const clickPlus = (id) => {
    const update = counters.map(el => el.id === id ? {...el, value: el.value + 1} : el);
    setCounters(update);
}
const clickMinus = (id) => {
    const update = counters.map(el => el.id === id ? {...el, value: el.value - 1} : el);
    setCounters(update);
}
const clickReset = (id) => {
    const update = counters.map(el => el.id === id ? {...el, value: el.value = 0} : el);
    setCounters(update);
}
const clickDelete = (id) => {
    const deleteCount = counters.filter(el => el.id !== id);
    setCounters(deleteCount);
}
const addCounter = () => {
    const update = [...counters, {id: Math.random(), value: Math.ceil(Math.random()*1000)}];
    setCounters(update);
}

    return (
        <div>
            <el>COUNTERS</el>
            {counters.map(el => (<div key = {el.id}>
                    <button onClick={() => clickPlus(el.id)}>Plus</button>
                    {el.value}
                    <button onClick={() => clickMinus(el.id)}>Minus</button>
                    <button onClick={() => clickReset(el.id)}>Reset</button>
                    <button onClick={() => clickDelete(el.id)}>Delete</button>
                </div>
             ))}
            <button onClick={addCounter}>Add</button>


        </div>

    );
}

export default App;
