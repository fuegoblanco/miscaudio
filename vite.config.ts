import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [
		react(),
		checker({
			typescript: true,
		}),
		visualizer({
			template: "treemap", // treemap or sunburst
			open: false,
			gzipSize: true,
			brotliSize: true,
			filename: "analyse.html", // will be saved in project's root
		}) as PluginOption,
	],
});
