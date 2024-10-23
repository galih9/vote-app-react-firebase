import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    define: {
      "process.env": env,
    },
    resolve: {
      alias: {
        // "@": path.resolve(__dirname, "./src/"),
        "@interface": path.resolve(__dirname, "./src/types"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@services": `${path.resolve(__dirname, "./src/services")}`,
        "@utils": `${path.resolve(__dirname, "./src/utils")}`,
        "@src": `${path.resolve(__dirname, "./src/")}`,
      },
    },
  };
});
