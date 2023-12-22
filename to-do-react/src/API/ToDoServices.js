import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/'

export default class ToDoServices {
    static async getToDos() {
        return await axios.get(API_URL + 'api/v1/todo/');
    }

    static async updateToDoStatus(id, status) {
        return await axios.patch(
            API_URL + `api/v1/todo/${id}/`,
            {
                completed: !status
            }
        )
    }

    static async deleteToDoItem(id) {
        return await axios.delete(API_URL + `api/v1/todo/${id}/`)
    }

    static async addToDoItem(title) {
        return await axios.post(
            API_URL + 'api/v1/todo/',
            {title}
        )
    }

}
