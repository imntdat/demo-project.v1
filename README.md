# Project Instruduction

This project is a monorepo which used **[Nx](https://nx.dev/getting-started/package-based-repo-tutorial)** to create a new workspace, **[PNPM](https://pnpm.io/installation)** to manage workspace and **[Vite](https://vitejs.dev/guide/)** to create packages inside the workspace.

<div>
    <img src="https://seeklogo.com/images/N/nx-logo-8EB5A23B44-seeklogo.com.png" height="100px" />
    <img src="https://d33wubrfki0l68.cloudfront.net/aad219b6c931cebb53121dcda794f6180d9e4397/17f34/assets/images/pnpm-standard-79c9dbb2e99b8525ae55174580061e1b.svg" height="100px" />
    <img src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" height="100px" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" height="100px" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" height="100px" />
</div>

- [1. VSCode recommended extensions](#1-vscode-recommended-extensions)
- [2. Common commands](#2-common-commands)
- [3. Create new workspace](#3-create-new-workspace)
- [4. Create new package](#4-create-new-package)
  - [4.1. Installation](#41-installation)
  - [4.2 Config root <code>package.json</code> file](#42-config-root-packagejson-file)
- [5. Config new package](#5-config-new-package)
  - [5.1. Config <code>package.json</code> file](#51-config-packagejson-file)
  - [5.2. Downgrade from **Vue 3** to **Vue 2**](#52-downgrade-from-vue-3-to-vue-2)
  - [5.3. Config <code>main.ts</code> file](#53-config-maints-file)
  - [5.4. Config <code>vite.config.ts</code> file](#54-config-viteconfigts-file)
  - [5.5. Config <code>tsconfig.json</code> file](#55-config-tsconfigjson-file)
  - [5.6. Config **ESLint**, **Prettier**](#56-config-eslint-prettier)
- [6. Templates](#6-templates)
  - [6.1. Vue component](#61-vue-component)

---

## 1. VSCode recommended extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

---

## 2. Common commands

<b>It's almost the same as NPM</b>

Install dependencies

```console
> pnpm i ...
```

Install dependencies to a specificial package

```console
> pnpm --filter <package_name> i ...
```

---

## 3. Create new workspace

```console
> pnpx create-nx-workspace@latest <project_name>

? Choose your style: Package-based: Craft your own setup. Nx makes it fast, but lets you run things your way.
? Enable distributed caching to make your CI faster: Yes
```

In the <strong>root</strong> folder, overide the <code>.prettierrc.cjs</code> file

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

## 4. Create new package

### 4.1 Installation

Move to <code>packages</code> folder

```console
> cd packages
```

Then, run

```console
> pnpm create vite

? Project name: <package_name>
? Select a framework: Vue
? Select a variant: TypeScript
```

*Remove <code>.vscode</code> folder to avoid conflicting with **root** <code>.vscode</code> folder*

### 4.2 Config root package.json file

Add <code>build</code> & <code>dev</code> commands for the new package

```json
{
  "name": "@<project_name>/root",
  ...
  "scripts": {
    ...
    "build:<package_name>": "nx build @<project_name>/<package_name>",
    "dev:<package_name>": "nx dev @<project_name>/<package_name>"
  },
  ...
}
```

---

## 5. Config new package

Move to the new package has just generated

```console
> cd <package_name>
```

### 5.1. Config package.json file

Change properties: <code>name</code>, <code>main</code>, <code>types</code>

```json
{
  "name": "@<project_name>/<package_name>",
  ...
  "main": "dist/main.js",
  "types": "dist/main.d.ts",
  "scripts": {
    "dev": "vite --host --port <port>",
    ...
  },
  ...
}
```

### 5.2. Downgrade from Vue 3 to Vue 2

Install dependencies

```console
> pnpm i path vite-plugin-vue2 vue@^2.7.13
```

```console
> pnpm i -D @types/node vite-plugin-dts vue-template-compiler sass
```

### 5.3. Config main.ts file

```ts
import Vue from "vue"
import "./style.css"
import App from "./App.vue"

new Vue({ render: (h) => h(App) }).$mount("#app")
```

### 5.4. Config vite.config.ts file

Copy and paste these scripts

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

### 5.5. Config tsconfig.json file

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

### 5.6. Config ESLint, Prettier

Install **ESLint** dependencies

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

Install **Prettier** dependencies

```console
> pnpm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

Install more a dependency to more suitable for Vue, run:

```console
> pnpm i -D vue-eslint-parser
```

Copy and paste these scripts to the <code>.eslintrc.cjs</code> file

```cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
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
        htmlWhitespaceSensitivity: "ignore",
      },
    ],

    "vue/block-lang": [
      "error",
      {
        script: {
          lang: "ts",
        },
      },
    ],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/custom-event-name-casing": ["error", "kebab-case"],
    "vue/html-self-closing": "off",
    "vue/multi-word-component-names": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/padding-line-between-blocks": "error",
    "vue/singleline-html-element-content-newline": "off",
    "vue/sort-keys": "error",
  },
}
```

## 6. Templates

## 6.1. Vue component

```vue
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({})
</script>

<style lang="scss" scoped></style>
```
