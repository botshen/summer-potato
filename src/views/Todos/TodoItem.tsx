import React from "react";

type TodoItemProps = {}

const TodoItem: React.FC<TodoItemProps> = (props) => {
    // const {todo, onToggle, onRemove} = props;
    return (
        <div></div>
        // <li className="todo-item">
        //     <input
        //         type="checkbox"
        //         checked={todo.complete}
        //         onChange={() => onToggle(todo.id)}
        //     />
        //     <label className={todo.complete ? 'complete' : ''}>{todo.title}</label>
        //     <button onClick={() => onRemove(todo.id)}>&#xd7;</button>
        // </li>
    );
};

export default TodoItem;
