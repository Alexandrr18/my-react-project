import { useState } from "react";
// компонент ФОРМА для заполнения и добавления новых задач

function Form({onAddTask}) {

    const [task, setTask] = useState('');
    const onChange = (e) => {
        setTask(e.target.value)
    }
    const onClick = () => {
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
            onChange={onChange}
            />
            <button onClick={onClick}>Добавить задачу</button>
        </div>
    )
}

export default Form;