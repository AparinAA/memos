import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const ReactCompilerConfig = {};

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE_PATH || "/";

  return defineConfig({
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }),
    ],
    build: {
      minify: false,
    },
    base,
  });
};
