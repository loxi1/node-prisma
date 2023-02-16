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
exports.CursoController = void 0;
const cursoServices_1 = require("../services/cursoServices");
const tsoa_1 = require("tsoa");
let CursoController = class CursoController {
    getCursoLista() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cursoServices_1.cursoServices.getCursoList();
        });
    }
    getCursoPorCodigo(cursoCodigo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cursoServices_1.cursoServices.getCursoByIdCode(cursoCodigo);
        });
    }
    crearCurso(curso) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cursoServices_1.cursoServices.createCurso(curso);
        });
    }
    actualizarCurso(cursoCodigo, curso) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cursoServices_1.cursoServices.actualizarCurso(cursoCodigo, curso);
        });
    }
};
__decorate([
    (0, tsoa_1.Get)('curso-lista'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "getCursoLista", null);
__decorate([
    (0, tsoa_1.Get)('curso/{cursoCodigo}'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "getCursoPorCodigo", null);
__decorate([
    (0, tsoa_1.Post)('crear-curso'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "crearCurso", null);
__decorate([
    (0, tsoa_1.Put)('actualizar-curso/{cursoCodigo}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "actualizarCurso", null);
CursoController = __decorate([
    (0, tsoa_1.Route)('Curso'),
    (0, tsoa_1.Tags)('Curso')
], CursoController);
exports.CursoController = CursoController;
