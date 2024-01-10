import { useTodo } from "../context/useTodo";
import { SiStarship } from "react-icons/si";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodo();

  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl bg-zinc-900">
          <SiStarship className="text-5xl" />
          Não há nada para exibir!
        </h1>
      </div>
    );
  }

  return (
    <ul className="grid max-w-lg gap-2 px-5 m-auto">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
