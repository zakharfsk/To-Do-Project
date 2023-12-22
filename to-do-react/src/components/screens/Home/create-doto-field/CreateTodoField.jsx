import React, {useState} from 'react';
import ToDoServices from "../../../../API/ToDoServices";

const CreateTodoField = ({setTodos, showAlert}) => {
    const [title, setTitle] = useState('');

    const addTodo = async title => {
        await ToDoServices.addToDoItem(title).then(
            response => {
                if (response.status === 201) {
                    setTodos(prev => [response.data, ...prev])
                    showAlert([true, 'Success', 'Todo created'])
                }
            }
        ).catch(
            () => showAlert({show: true, title: 'Oops...', description: 'Something went wrong'})
        )
        setTitle('');
    }

    return (
        <div
            className='flex items-center justify-between rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mb-20'>
            <input
                type='text'
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                className='bg-transparent outline-none w-full border-none'
                placeholder='Add new todo'
            />
        </div>
    );
};

export default CreateTodoField;