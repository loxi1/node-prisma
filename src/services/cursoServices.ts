

import { CreateCursoDTO } from "src/models/DTO/cursoDTO";
import prisma from "../models/client";
import { UpdateCursoDTO } from '../models/DTO/cursoDTO';

class cursoServicios {
    async getCursoList(isActive: boolean = true) {
        const curso = await prisma.curso.findMany({
            where: {
                estado: isActive
            },
            select: {
                id: true,
                titulo: true,
                imagen: true,
                codigo: true
            }
        })
        return curso
    }

    async getCursoByIdCode(codigo: string) {
        const curso = await prisma.curso.findUnique({
            where: {
                codigo
            },
            select: {
                id: true,
                titulo: true,
                imagen: true,
                codigo: true
            }
        })
        return curso
    }

    async createCurso(curso: CreateCursoDTO) {
        const nuevoCurso = await prisma.curso.create({
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
        })
        return nuevoCurso
    }

    async actualizarCurso(cursoCode: string, curso: UpdateCursoDTO) {
        const updCurso = await prisma.curso.update({
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
        })
        return updCurso
    }
}

export const cursoServices = new cursoServicios()