import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // ...
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setupTest.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
