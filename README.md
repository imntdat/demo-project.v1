.prettierrc.cjs file

```cjs
module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  quoteProps: "as-needed",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
}
```

# 1. Create new package

### 1.1 Installation

Move to packages folder, run: cd packages

The variable needs to replace: <package_name>

```console
> cd packages
```

Then, run:

```console
> pnpm create vite

? Project name: <package_name>
? Select a framework: Vue
? Select a variant: TypeScript
```

**Remove .vscode folder**

### 1.2 Config root package.json file

Add build & dev commands for the new package

The variable needs to replace: <package_name>

```json
{
  ...
  "scripts": {
    ...
    "build:<package_name>": "nx build @demo/<package_name>",
    "dev:<package_name>": "nx dev @demo/<package_name>"
  },
  ...
}
```

---

# 2. Config new package

Move to the new package has just generated, run:

The variable needs to replace: <package_name>

```console
> cd <package_name>
```

### 2.1. Config package.json file

Change properties: name, main, types

```json
{
  "name": "@demo/<package_name>",
  ...
  "main": "dist/main.js",
  "types": "dist/main.d.ts",
  ...
}
```

### 2.2. Downgrade from Vue 3 to Vue 2

Install dependencies, run:

```console
> pnpm i path vite-plugin-vue2 vue@^2.7.13
```

```console
> pnpm i -D @types/node vite-plugin-dts vue-template-compiler sass
```

### 2.3. Config main.ts file

```ts
import Vue from "vue"
import "./style.css"
import App from "./App.vue"

new Vue({ render: (h) => h(App) }).$mount("#app")
```

### 2.4. Config vite.config.ts file

Copy and paste these scripts

The variable needs to replace: <package_name>

```ts
import path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { createVuePlugin as vue2 } from "vite-plugin-vue2"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "demo-<package_name>",
      formats: ["es"],
      fileName: "main",
    },
  },
  plugins: [vue2(), dts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
```

### 2.5. Config tsconfig.json file

Copy and paste these scripts

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "lib": ["ESNext", "DOM"],
    "module": "ESNext",
    "moduleResolution": "Node",
    "noEmit": true,
    "paths": {
      "@/*": ["src/*"]
    },
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "ESNext",
    "useDefineForClassFields": true
  },
  "vueCompilerOptions": {
    "extensions": [".vue"],
    "target": 2.7
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules", "dist"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 2.6. Config ESLint, Prettier

Install ESLint dependencies, run:

```console
> pnpm i -D eslint
```

```console
> pnpx eslint --init

? How would you like to use ESLint?: To check syntax and find problems
? What type of modules does your project use?: JavaScript modules (import/export)
? Which framework does your project use?: Vue.js
? Does your project use TypeScript?: Yes
? Where does your code run?: Browser, Node
? What format do you want your config file to be in?: JavaScript
? Would you like to install them now?: Yes
? Which package manager do you want to use?: pnpm
```

Install Prettier dependencies, run:

```console
> pnpm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

Install more a dependency to more suitable for Vue, run:

```console
> pnpm i -D vue-eslint-parser
```

Copy and paste these scripts to the .eslintrc.cjs file

```cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
}
```

# 3. Vue component template

```vue
<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style lang="scss" scoped></style>
```
