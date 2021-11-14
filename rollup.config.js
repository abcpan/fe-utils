import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import path from "path";
import { eslint } from "rollup-plugin-eslint";
import pkg from "./package.json";

const getPath = (fileName) => path.resolve(process.cwd(), fileName);
const extensions = [
  ".ts",
  ".tsx",
  ".js",
]

const ts = typescript({
  tsconfig: getPath("tsconfig.json"),
  extensions,
})

const es = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**']
})


// 配置导出
export default {
  input: getPath("src/index.ts"),
  output: {
    name: pkg.name,
    file: pkg.main,
    format: "umd",
  },
  plugins: [
      resolve(extensions), // 查找和打包node_modules 中的第三方模块
      commonjs(), // 将 commonjs 转换成ES2015模块提供给rollup 处理
      //es, // 解析ts
      ts,
  ]
}