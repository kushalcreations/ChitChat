import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      "/api": {
        target: "https://chitchat-backend-mgxj.onrender.com", //  http://3.111.127.237 // http://localhost:5000
      },
    },
  },
});
