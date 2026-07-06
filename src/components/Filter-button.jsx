import { useState } from "react";
// компонент КНОПКИ для фильтрации списка задач с пропсом для передачи выбранного фильтра в компонент App

function FilterButton({onFilterChange}) {

    // создаю хук для хранения состояния кнопки
    const [select, setSelect] = useState('all');

    // создаю обработчик для передачи значения выбранной кнопки
    const onChange = (e) => {
        const filterValue = e.target.value
        setSelect(filterValue)
        
    // проверяю передан ли обработчик handleFilterChange в компоненте App 
        if (onFilterChange) {
        onFilterChange(filterValue)
    };
    }
    return (
        <div>
            <input
                type="radio"
                id="radio-all"
                value="all"
                name="taskFilter"
                checked={select==="all"}
                onChange={onChange}
            />
            <label htmlFor="radio-all">Все</label>
            <input
                type="radio"
                id="radio-completed"
                value="completed"
                name="taskFilter"
                checked={select==="completed"}
                onChange={onChange}
            />
            <label htmlFor="radio-completed">Выполненные</label>
            <input
                type="radio"
                id="radio-not completed"
                value="not completed"
                name="taskFilter"
                checked={select==="not completed"}
                onChange={onChange}
            />
            <label htmlFor="radio-not completed">Не выполненные</label>
        </div>
    )
}

export default FilterButton;