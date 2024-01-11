import { render, screen } from "@testing-library/react";
import { TodoList } from "../../../components/TodoList";
import { TodoProvider } from "../../../context/TodoContext";
import { describe, test, expect } from "vitest";

describe("TodoList Component TestSuit", () => {
  test("renders TodoList component with no tasks", () => {
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>,
    );

    const emptyMessage = screen.getByText("Não há nada para exibir!");
    expect(emptyMessage).toBeInTheDocument();
  });
});
