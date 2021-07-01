# TaxiLoyal

## Install Visual Code extensions

- <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
- <https://marketplace.visualstudio.com/items?itemName=Triet.reactjs-extension-pack>
- <https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype>

## Environment settings

## Install package

Run

```shell
yarn install
```

## Format Document On Save setting on VS Code

```json

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.format.enable": true,
```

## Start

First, run the development server:

```shell
yarn web
```
