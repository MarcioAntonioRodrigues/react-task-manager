import { useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Estudar',
            description: 'Estudar programação para a prova de domingo',
            isCompleted: false,
        },
        {
            id: 2,
            title: 'Malhar',
            description: 'Malhar para obter boa saúde',
            isCompleted: false,
        },
        {
            id: 3,
            title: 'Fazer compras',
            description: 'Fazer compras para abastecer a casa',
            isCompleted: false,
        },
    ])
    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <h1 className="text-red-500">Gerenciador de Tarefas</h1>
            <AddTask />
            <Tasks tasks={tasks} />
        </div>
    )
}

export default App
