import React from "react";
import s from "./Todos.module.scss";
import {Input, Badge, Tooltip} from "@mantine/core";
import {Plus} from 'tabler-icons-react';
import TodoInput from "./TodoInput";

export const Todos: React.FC = () => {

    return (
        <div className={s.wrapper}>
            <TodoInput/>
        </div>
    );
};
