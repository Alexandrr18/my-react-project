import { useState } from "react";
// компонент ФОРМА для заполнения и добавления новых задач

function Form({onAddTask}) {

    const [task, setTask] = useState('');
    const eventChange = (e) => {
        setTask(e.target.value)
    }
    const eventClick = () => {
        if (task) {
            onAddTask(task);
            setTask('')
        }
    }
    return (
        <div>
            <input 
            type="text"
            placeholder="Добавить задачу"
            value={task}
            onChange={eventChange}
            />
            <button onClick={eventClick}>Добавить задачу</button>
        </div>
    )
}

export default Form;