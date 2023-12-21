import React, {useState} from 'react';
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-doto-field/CreateTodoField";

const data = [
    {
        _id: 1,
        title: 'Todo 1',
        isCompleted: false
    },
    {
        _id: 2,
        title: 'Todo 2',
        isCompleted: true
    },
    {
        _id: 3,
        title: 'Todo 3',
        isCompleted: false
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t._id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    }

    const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>To do</h1>
            <CreateTodoField setTodos={setTodos}/>
            {todos.map(todo =>
                    <TodoItem
                        key={todo._id}
                        todo={todo}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo}
                    />
            )}
        </div>
    )
};

export default Home;