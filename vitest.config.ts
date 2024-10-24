import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // JSDOM環境を使用
    globals: true, // グローバルAPIの有効化（例: describe, it, expect）
    setupFiles: "./vitest.setup.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
