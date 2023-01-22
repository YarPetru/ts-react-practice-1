import { FC, useState, useRef, useEffect } from "react";
import { ITodo } from "../types/data";
import TodoList from "./TodoList";

const App: FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
    }
    setValue("");
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  useEffect(() => {
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
    inputRef?.current?.focus();
  }, [todos]);

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button onClick={addTodo}>Add</button>

      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
