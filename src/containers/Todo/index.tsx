import { observer } from "mobx-react-lite";
import React, { useRef, useState } from "react";
import { todos } from "../../Store";
import { TodoWrapper } from "../../styles/Todo";

const Todos: React.FC = observer(() => {
    const todosData = todos.getTodos();
    const [todoList, setTodoList] = useState<[{ title: string }]>(todosData);
    const inputRef = useRef<any>(null);
    const filterTodo = (e: any) => {
        setTodoList(todos.filterTodo(e.target.value));
    };

    const handleForm = () => {
        todos.setTodo(inputRef.current.value);
        inputRef.current.value = "";
        setTodoList(todosData);
    };

    return (
        <TodoWrapper>
            <div className="form">
                <input
                    className="form__inp"
                    placeholder="Enter text for search or add new Todo"
                    type="text"
                    ref={inputRef}
                    onChange={filterTodo}
                />
                <button
                    className="form__btn"
                    onClick={handleForm}
                    type="button"
                >
                    Create
                </button>
            </div>
            <ul className="todo__list">
                {todoList.map((item, index) => (
                    <li className="todo__list-item" key={index}>
                        <input type="checkbox" id={"" + index} />
                        <label
                            className="todo__list-title"
                            htmlFor={"" + index}
                        >
                            {item.title}
                        </label>
                    </li>
                ))}
            </ul>
        </TodoWrapper>
    );
});

export default Todos;
