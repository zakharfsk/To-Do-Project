import React, {useState} from 'react';

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('');

    const addTodo = title => {
        setTodos(prev => [{
            _id: new Date(),
            title,
            isCompleted: false
        }, ...prev])
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