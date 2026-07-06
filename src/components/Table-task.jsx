
// компонент ТАБЛИЦА задач, куда после создания новых задач они добавляются

function TableTask({tasks}) {
    return (
        <div>
            <h2>Список задач</h2>
            {tasks.length === 0 ? <p>Задач пока нет!</p> : 
                <ul>
                    {tasks.map(task => <li key={task.id}>
                        {task.text} - {task.completed ? 'Выполнена задача' : 'Не выполнена задача'}
                    </li>)}
                </ul>
                }
        </div>
    )
}

export default TableTask;