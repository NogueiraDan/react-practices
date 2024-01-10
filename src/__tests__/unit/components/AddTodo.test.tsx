/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { AddTodo } from "../../../components";
import { TodoProvider } from "../../../context";
import { describe, test, expect } from "vitest";

describe("AddTodo Component", () => {
  test("should render AddTodo component", () => {
    render(
      <TodoProvider>
        <AddTodo />
      </TodoProvider>,
    );
    const inputElement = screen.getByPlaceholderText("Digite algo...");
    const submitButton = screen.getByText("Enviar");

    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("does not add empty todo on form submission", async () => {
    render(
      <TodoProvider>
        <AddTodo />
      </TodoProvider>,
    );
    const submitButton = screen.getByText("Enviar");

    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorToast = screen.queryByText("A tarefa não pode ser vazia!");
      expect(errorToast).toBeNull();
    });
  });
});
