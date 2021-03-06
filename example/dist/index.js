"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _core_1 = require("curie-server/dist/@core");
const curie_server_1 = require("curie-server");
(() => __awaiter(this, void 0, void 0, function* () {
    const server = new curie_server_1.Server({
        port: 8000,
    });
    yield _core_1.initApp(server);
    server.hookupDBridge(curie_server_1.PostDBridge, "postgres://postgres:postgres@127.0.0.1:5432/postgres");
}))();
//# sourceMappingURL=index.js.map