import React, {useEffect, useState} from 'react';
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-doto-field/CreateTodoField";
import ModalAlert from "../../ModalAlert/ModalAlert";
import ToDoServices from "../../../API/ToDoServices";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [alert, showAlert] = useState({show: false, title: '', description: ''})
    useEffect(() => {
        (async () => await getTodos())()
    }, []);

    const getTodos = async () => {
        await ToDoServices.getToDos().then(
            response => {
                if (response.status === 200) {
                    setTodos(response.data);
                }
            }
        ).catch(
            () => showAlert({show: true, title: 'Oops...', description: 'Something went wrong'})
        )
    }

    const changeTodo = async (id) => {
        const copy = [...todos];
        const current = copy.find(t => t.id === id);

        await ToDoServices.updateToDoStatus(id, current).then(
            response => {
                if (response.status === 200) {
                    current.completed = !current.completed;
                    setTodos(copy);
                }
            }
        ).catch(
            () => showAlert({show: true, title: 'Oops...', description: 'Something went wrong'})
        );
    }

    const removeTodo = async (id) => {
        await ToDoServices.deleteToDoItem(id).then(
            response => {
                if (response.status === 204) {
                    setTodos([...todos].filter(t => t.id !== id))
                }
            }
        ).catch(
            () => showAlert({show: true, title: 'Oops...', description: 'Something went wrong'})
        )
    }

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>To do</h1>
            <CreateTodoField setTodos={setTodos} showAlert={showAlert}/>
            {todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo}
                    />
            )}
            {alert.show && <ModalAlert title={alert.title} description={alert.description} showAlert={showAlert}/>}
        </div>
    )
};

export default Home;