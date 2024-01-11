import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { TodoItem } from "../../../components";
import { TodoProvider } from "../../../context";
import { Todo } from "../../../context";
import { describe, test, expect } from "vitest";

const sampleTodo: Todo = {
  id: "1",
  text: "Test Todo",
  status: "undone",
};

describe("TodoItem Component TestSuit", () => {
  test("renders TodoItem component", () => {
    render(
      <TodoProvider>
        <TodoItem todo={sampleTodo} />
      </TodoProvider>,
    );

    const todoTextElement = screen.getByText("Test Todo");
    expect(todoTextElement).toBeInTheDocument();
  });

  test("allows editing of TodoItem", () => {
    render(
      <TodoProvider>
        <TodoItem todo={sampleTodo} />
      </TodoProvider>,
    );

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const editInput = screen.getByRole("textbox");
    fireEvent.change(editInput, { target: { value: "Updated Todo" } });

    const updateButton = screen.getByText("Update");
    fireEvent.click(updateButton);

    waitFor(() =>
      expect(
        screen.getByText("Todo updated successfully!"),
      ).toBeInTheDocument(),
    );
  });
});
