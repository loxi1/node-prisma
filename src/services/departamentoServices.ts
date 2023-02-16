import prisma from "../models/client"

class departamentoSevicio {
    async getDepartamentoServicio() {
        return await prisma.departamento.findMany({
            select: {
                id: true,
                departamento: true 
            }
        })
    }

    async getDepartamentoPorId(codigoId: number) {
        return await prisma.departamento.findUnique({
            where: {
                id: codigoId
            },
            select: {
                id: true,
                departamento: true
            }
        })
    }
}

export const depatamentoSevices = new departamentoSevicio()