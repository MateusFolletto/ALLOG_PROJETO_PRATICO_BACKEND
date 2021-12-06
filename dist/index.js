"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(routes_1.default);
app.listen(3333);
/* COMANDOS:

    NODE JS
    yarn init -y => iniciar um projeto em javascript
    yarn add -D typescript => adiciona o TypeScript como dependencia de desenvolvimento

    em caso de reticencias em um import, importar os @types
    yarn add @types/express

    para atualizar o ambiente ao salvar alterações em arquivos de modo automático
    yarn add ts-no-dev

    ir no package.json e adicionar o seguinte objeto:
    "scripts": {
        "dev:server": "ts-node-dev --respawn --transpile-only src/index.ts"
    }
    rodar o projeto como yarn dev:server

    ====================================================================================

    REACT JS
    yarn create react-app frontend --template=typescript

*/ 
