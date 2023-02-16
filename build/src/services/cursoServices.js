"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoServices = void 0;
const models_1 = __importDefault(require("../models"));
class cursoServicios {
    getCursoList(isActive = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield models_1.default.curso.findMany({
                where: {
                    estado: isActive
                },
                select: {
                    id: true,
                    titulo: true,
                    imagen: true,
                    codigo: true
                }
            });
            return curso;
        });
    }
    getCursoByIdCode(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield models_1.default.curso.findUnique({
                where: {
                    codigo
                },
                select: {
                    id: true,
                    titulo: true,
                    imagen: true,
                    codigo: true
                }
            });
            return curso;
        });
    }
    createCurso(curso) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevoCurso = yield models_1.default.curso.create({
                data: {
                    titulo: curso.titulo,
                    imagen: curso.imagen,
                    codigo: curso.codigo
                },
                select: {
                    id: true,
                    titulo: true,
                    imagen: true,
                    codigo: true
                }
            });
            return nuevoCurso;
        });
    }
    actualizarCurso(cursoCode, curso) {
        return __awaiter(this, void 0, void 0, function* () {
            const updCurso = yield models_1.default.curso.update({
                where: {
                    codigo: cursoCode
                },
                data: {
                    titulo: curso.titulo,
                    imagen: curso.imagen,
                    estado: curso.estado
                },
                select: {
                    codigo: true,
                    titulo: true,
                    imagen: true,
                    estado: true
                }
            });
            return updCurso;
        });
    }
}
exports.cursoServices = new cursoServicios();
