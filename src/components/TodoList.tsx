import React, { FC } from "react";
import { ITodo } from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoList {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList: FC<ITodoList> = (props) => {
  const { removeTodo, toggleTodo, items } = props;

  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
