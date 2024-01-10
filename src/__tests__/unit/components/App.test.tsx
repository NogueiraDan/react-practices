/* eslint-disable @typescript-eslint/no-empty-function */
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../../../App";
import { TodoProvider } from "../../../context";

afterEach(() => {
  cleanup();
});

describe("Vitest Components Testing", () => {
  it("should render component", () => {
    render(
      <TodoProvider>
        <App />
      </TodoProvider>,
    );
    expect(screen).toBeTruthy();
  });
});
