/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const auth_module_1 = __webpack_require__(7);
const clientes_module_1 = __webpack_require__(11);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [clientes_module_1.ClientesModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(8);
const auth_controller_1 = __webpack_require__(9);
const auth_service_1 = __webpack_require__(10);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'mock-secret',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(10);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(body) {
        const user = await this.authService.validateUser(body.email, body.password);
        if (!user)
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        return this.authService.login(user);
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(8);
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.users = [
            { id: 1, email: 'admin@gmail.com', password: '123456' },
        ];
    }
    async validateUser(email, password) {
        const user = this.users.find((u) => u.email === email && u.password === password);
        return user || null;
    }
    async login(user) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthService);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientesModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const clientes_controller_1 = __webpack_require__(12);
const clientes_service_1 = __webpack_require__(13);
let ClientesModule = class ClientesModule {
};
exports.ClientesModule = ClientesModule;
exports.ClientesModule = ClientesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [clientes_controller_1.ClientesController],
        providers: [clientes_service_1.ClientesService],
    })
], ClientesModule);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientesController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const clientes_service_1 = __webpack_require__(13);
let ClientesController = class ClientesController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(body) {
        return this.service.create(body);
    }
    update(id, body) {
        return this.service.update(id, body);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.ClientesController = ClientesController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ClientesController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], ClientesController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ClientesController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ClientesController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], ClientesController.prototype, "remove", null);
exports.ClientesController = ClientesController = tslib_1.__decorate([
    (0, common_1.Controller)('clientes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof clientes_service_1.ClientesService !== "undefined" && clientes_service_1.ClientesService) === "function" ? _a : Object])
], ClientesController);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientesService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let ClientesService = class ClientesService {
    constructor() {
        this.clientes = [
            {
                id: 1,
                nome: 'João Silva',
                email: 'joao.silva@email.com',
                telefone: '(11) 99999-9999',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Av. Paulista, 1000',
                        bairro: 'Bela Vista',
                        cidade: 'São Paulo',
                        estado: 'SP',
                    },
                    {
                        logradouro: 'Rua Augusta, 500',
                        bairro: 'Consolação',
                        cidade: 'São Paulo',
                        estado: 'SP',
                    },
                ],
            },
            {
                id: 2,
                nome: 'Maria Souza',
                email: 'maria.souza@email.com',
                telefone: '(21) 98888-8888',
                status: 'Inativo',
                enderecos: [
                    {
                        logradouro: 'Rua Copacabana, 500',
                        bairro: 'Copacabana',
                        cidade: 'Rio de Janeiro',
                        estado: 'RJ',
                    },
                ],
            },
            {
                id: 3,
                nome: 'Carlos Oliveira',
                email: 'carlos.oliveira@email.com',
                telefone: '(31) 97777-7777',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Av. Afonso Pena, 1500',
                        bairro: 'Centro',
                        cidade: 'Belo Horizonte',
                        estado: 'MG',
                    },
                    {
                        logradouro: 'Rua Savassi, 200',
                        bairro: 'Savassi',
                        cidade: 'Belo Horizonte',
                        estado: 'MG',
                    },
                ],
            },
            {
                id: 4,
                nome: 'Ana Santos',
                email: 'ana.santos@email.com',
                telefone: '(41) 96666-6666',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Rua XV de Novembro, 700',
                        bairro: 'Centro',
                        cidade: 'Curitiba',
                        estado: 'PR',
                    },
                ],
            },
            {
                id: 5,
                nome: 'Pedro Costa',
                email: 'pedro.costa@email.com',
                telefone: '(51) 95555-5555',
                status: 'Inativo',
                enderecos: [
                    {
                        logradouro: 'Av. Ipiranga, 200',
                        bairro: 'Centro',
                        cidade: 'Porto Alegre',
                        estado: 'RS',
                    },
                    {
                        logradouro: 'Rua Padre Chagas, 50',
                        bairro: 'Moinhos de Vento',
                        cidade: 'Porto Alegre',
                        estado: 'RS',
                    },
                ],
            },
            {
                id: 6,
                nome: 'Fernanda Lima',
                email: 'fernanda.lima@email.com',
                telefone: '(61) 94444-4444',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'SQN 304, Bloco A',
                        bairro: 'Asa Norte',
                        cidade: 'Brasília',
                        estado: 'DF',
                    },
                ],
            },
            {
                id: 7,
                nome: 'Ricardo Alves',
                email: 'ricardo.alves@email.com',
                telefone: '(71) 93333-3333',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Av. Oceânica, 1200',
                        bairro: 'Barra',
                        cidade: 'Salvador',
                        estado: 'BA',
                    },
                ],
            },
            {
                id: 8,
                nome: 'Patrícia Mendes',
                email: 'patricia.mendes@email.com',
                telefone: '(81) 92222-2222',
                status: 'Inativo',
                enderecos: [
                    {
                        logradouro: 'Av. Boa Viagem, 3000',
                        bairro: 'Boa Viagem',
                        cidade: 'Recife',
                        estado: 'PE',
                    },
                    {
                        logradouro: 'Rua da Aurora, 1000',
                        bairro: 'Santo Amaro',
                        cidade: 'Recife',
                        estado: 'PE',
                    },
                ],
            },
            {
                id: 9,
                nome: 'Marcos Pereira',
                email: 'marcos.pereira@email.com',
                telefone: '(91) 91111-1111',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Rua dos Mundurucus, 1800',
                        bairro: 'Jurunas',
                        cidade: 'Belém',
                        estado: 'PA',
                    },
                ],
            },
            {
                id: 10,
                nome: 'Camila Castro',
                email: 'camila.castro@email.com',
                telefone: '(85) 90000-0000',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Av. Beira Mar, 500',
                        bairro: 'Meireles',
                        cidade: 'Fortaleza',
                        estado: 'CE',
                    },
                ],
            },
            {
                id: 11,
                nome: 'Bruno Carvalho',
                email: 'bruno.carvalho@email.com',
                telefone: '(48) 99876-5432',
                status: 'Inativo',
                enderecos: [
                    {
                        logradouro: 'Av. Beira Mar Norte, 1500',
                        bairro: 'Centro',
                        cidade: 'Florianópolis',
                        estado: 'SC',
                    },
                    {
                        logradouro: 'Rua Bocaiúva, 2000',
                        bairro: 'Centro',
                        cidade: 'Florianópolis',
                        estado: 'SC',
                    },
                ],
            },
            {
                id: 12,
                nome: 'Luciana Martins',
                email: 'luciana.martins@email.com',
                telefone: '(84) 98765-4321',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Av. Roberto Freire, 1000',
                        bairro: 'Ponta Negra',
                        cidade: 'Natal',
                        estado: 'RN',
                    },
                ],
            },
            {
                id: 13,
                nome: 'Rodrigo Barbosa',
                email: 'rodrigo.barbosa@email.com',
                telefone: '(65) 97654-3210',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Av. Historiador Rubens de Mendonça, 1500',
                        bairro: 'Araés',
                        cidade: 'Cuiabá',
                        estado: 'MT',
                    },
                ],
            },
            {
                id: 14,
                nome: 'Amanda Fernandes',
                email: 'amanda.fernandes@email.com',
                telefone: '(98) 96543-2109',
                status: 'Inativo',
                enderecos: [
                    {
                        logradouro: 'Av. Jerônimo de Albuquerque, 1001',
                        bairro: 'Cohama',
                        cidade: 'São Luís',
                        estado: 'MA',
                    },
                    {
                        logradouro: 'Rua Grande, 500',
                        bairro: 'Centro',
                        cidade: 'São Luís',
                        estado: 'MA',
                    },
                ],
            },
            {
                id: 15,
                nome: 'Daniel Gonçalves',
                email: 'daniel.goncalves@email.com',
                telefone: '(95) 95432-1098',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Av. Ville Roy, 1300',
                        bairro: 'Caçari',
                        cidade: 'Boa Vista',
                        estado: 'RR',
                    },
                ],
            },
            {
                id: 16,
                nome: 'Juliana Ribeiro',
                email: 'juliana.ribeiro@email.com',
                telefone: '(27) 94321-0987',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Av. Nossa Senhora dos Navegantes, 839',
                        bairro: 'Enseada do Suá',
                        cidade: 'Vitória',
                        estado: 'ES',
                    },
                ],
            },
            {
                id: 17,
                nome: 'Roberto Lopes',
                email: 'roberto.lopes@email.com',
                telefone: '(63) 93210-9876',
                status: 'Inativo',
                enderecos: [
                    {
                        logradouro: 'Quadra 103 Sul, Rua SO-1',
                        bairro: 'Plano Diretor Sul',
                        cidade: 'Palmas',
                        estado: 'TO',
                    },
                    {
                        logradouro: 'Quadra 104 Norte, Rua NO-2',
                        bairro: 'Plano Diretor Norte',
                        cidade: 'Palmas',
                        estado: 'TO',
                    },
                ],
            },
            {
                id: 18,
                nome: 'Cláudia Ferreira',
                email: 'claudia.ferreira@email.com',
                telefone: '(68) 92109-8765',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Rua Rui Barbosa, 450',
                        bairro: 'Centro',
                        cidade: 'Rio Branco',
                        estado: 'AC',
                    },
                ],
            },
            {
                id: 19,
                nome: 'Rafael Nunes',
                email: 'rafael.nunes@email.com',
                telefone: '(86) 91098-7654',
                status: 'Ativo',
                enderecos: [
                    {
                        logradouro: 'Av. Frei Serafim, 2100',
                        bairro: 'Centro',
                        cidade: 'Teresina',
                        estado: 'PI',
                    },
                ],
            },
            {
                id: 20,
                nome: 'Beatriz Santos',
                email: 'beatriz.santos@email.com',
                telefone: '(82) 90987-6543',
                status: 'Inativo',
                enderecos: [
                    {
                        logradouro: 'Av. da Paz, 1000',
                        bairro: 'Jaraguá',
                        cidade: 'Maceió',
                        estado: 'AL',
                    },
                    {
                        logradouro: 'Rua Sá e Albuquerque, 500',
                        bairro: 'Jatiúca',
                        cidade: 'Maceió',
                        estado: 'AL',
                    },
                ],
            },
        ];
    }
    findAll() {
        return this.clientes;
    }
    findOne(id) {
        return this.clientes.find((c) => c.id === id);
    }
    create(dto) {
        const novo = { ...dto, id: this.clientes.length + 1 };
        this.clientes.push(novo);
        return novo;
    }
    update(id, dto) {
        const index = this.clientes.findIndex((c) => c.id === id);
        if (index === -1)
            throw new common_1.NotFoundException();
        this.clientes[index] = { ...this.clientes[index], ...dto };
        return this.clientes[index];
    }
    remove(id) {
        const index = this.clientes.findIndex((c) => c.id === id);
        if (index === -1)
            throw new common_1.NotFoundException();
        this.clientes.splice(index, 1);
        return { success: true };
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ClientesService);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map