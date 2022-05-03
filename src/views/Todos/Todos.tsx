import React from "react";
import s from "./Todos.module.scss";
import {Input, Badge, Tooltip} from "@mantine/core";
import {Plus} from 'tabler-icons-react';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import {useStore} from "../../store";

export const Todos: React.FC = () => {
    const {todosStore} = useStore()
    return (
        <div className={s.wrapper}>
            <TodoInput/>
            {
                todosStore.todos.map((todo) =>
                    <TodoItem key={todo.id}{...todo}/>)
            }
        </div>
    );
};
