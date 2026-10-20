"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("vitest/config");
var path_1 = require("path");
var vite_tsconfig_paths_1 = require("vite-tsconfig-paths");
exports.default = (0, config_1.defineConfig)({
    test: {
        globals: true,
        environment: "node",
        coverage: {
            provider: "v8",
        }
    },
    resolve: {
        alias: {
            "@CParser": path_1.default.resolve(__dirname, "./src/lib/CVIS/CParser"),
            "@CMachine": path_1.default.resolve(__dirname, "./src/lib/CVIS/CMachine"),
            "@CVIS": path_1.default.resolve(__dirname, "./src/lib/CVIS"),
            "@lib": path_1.default.resolve(__dirname, "./src/lib"),
        },
    },
    plugins: [
        (0, vite_tsconfig_paths_1.default)()
    ]
});
