"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.departamentoController = void 0;
const departamentoServices_1 = require("../services/departamentoServices");
const tsoa_1 = require("tsoa");
let departamentoController = class departamentoController {
    getDepartamentoLista() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield departamentoServices_1.depatamentoSevices.getDepartamentoServicio();
        });
    }
    getDepartamentoPorId(codigoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield departamentoServices_1.depatamentoSevices.getDepartamentoPorId(codigoId);
        });
    }
};
__decorate([
    (0, tsoa_1.Get)('departamento-lista'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], departamentoController.prototype, "getDepartamentoLista", null);
__decorate([
    (0, tsoa_1.Get)('departamento/{codigoId}'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], departamentoController.prototype, "getDepartamentoPorId", null);
departamentoController = __decorate([
    (0, tsoa_1.Route)('departamento'),
    (0, tsoa_1.Tags)('Curso')
], departamentoController);
exports.departamentoController = departamentoController;
