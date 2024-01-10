import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo deve ser usado dentro de um TodoProvider");
  }

  return context;
};
