"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var path_1 = require("path");
var plugin_react_1 = require("@vitejs/plugin-react");
// https://vite.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    server: {
        watch: {
            usePolling: true,
        }
    },
    resolve: {
        alias: {
            '@': path_1.default.resolve(__dirname, './src'),
            '@lib': path_1.default.resolve(__dirname, './src/lib'),
            '@CVIS': path_1.default.resolve(__dirname, './src/lib/CVIS'),
            '@CParser': path_1.default.resolve(__dirname, './src/lib/CVIS/CParser'),
            '@CVisual': path_1.default.resolve(__dirname, './src/lib/CVIS/CVisual'),
            '@CMachine': path_1.default.resolve(__dirname, './src/lib/CVIS/CMachine'),
        }
    }
});
