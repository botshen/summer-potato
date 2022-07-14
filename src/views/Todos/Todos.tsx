import React, { useEffect, useState } from "react";
import s from "./Todos.module.scss";
import { Input, Badge, Tooltip } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useStore } from "../../store";
import axios from "../../config/axios";
import { Checkbox } from "@mantine/core";

interface resource {
  completed: Boolean;
  completed_at: string;
  created_at: string;
  deleted: string;
  description: string;
  extra: any;
  id: number;
  updated_at: string;
  user_id: number;
}

export const Todos: React.FC = () => {
  const [todos, setTodos] = useState<resource[]>([]);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    showTodos();
  }, []);
  useEffect(() => {
    console.log('checked',checked)
  }, [checked]);
  const showTodos = async () => {
    try {
      const response = await axios.get("todos");
      console.log("response", response);
      if (response.status === 200) {
        const data: resource[] = response.data.resources;
        setTodos(data);
      }
    } catch (e) {
      throw new Error(e as any);
    }
  };
  const listItems = todos
    .filter((v) => !v.deleted)
    .filter((v) => !v.completed)
    .map((todo) => (
      <li key={todo.id} className={s.box}>
        <Checkbox
          checked={checked}
          label={todo.description}
          onChange={(event) => setChecked(event.currentTarget.checked)}
        />
      </li>
    ));
  const listItemsComplete = todos
    .filter((v) => !v.deleted)
    .filter((v) => v.completed)
    .map((todo) => (
      <li key={todo.id} className={s.box}>
        <Checkbox label={todo.description} />
      </li>
    ));
  return (
    <div className={s.wrapper}>
      <TodoInput addTodos={showTodos} />
      <ul className={s.list}>{listItems}</ul>
      <span>已完成的任务</span>
      <ul className={s.list}>{listItemsComplete}</ul>
    </div>
  );
};
