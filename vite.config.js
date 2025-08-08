import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = (env.VITE_BASE_PATH || "/").replace(/\/?$/, "/");

  return defineConfig({
    plugins: [react()],
    base,
    test: {
      environment: "jsdom",
      setupFiles: "src/setupTests.js",
      css: true,
    },
  });
};
