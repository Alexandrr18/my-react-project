import { useState } from "react";

// компонент ПОИСК по добавленным задачам

function SearchTask({onSearchChange}) {

    const [search, setSearch] = useState('');
    const onChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        onSearchChange(value);
    };

    return (
        <div>
            <input 
            type="text"
            placeholder="Найти Задачу"
            value={search}
            onChange={onChange}
            />
        </div>
    )
}

export default SearchTask;