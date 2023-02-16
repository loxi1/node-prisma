import { cursoServices } from '../services/cursoServices';
import { Body, Get, Path, Post, Put, Route, Tags } from "tsoa";
import { CreateCursoDTO, UpdateCursoDTO } from '../models/DTO/cursoDTO';
@Route('Curso')
@Tags('Curso')
export class CursoController {
    @Get('curso-lista')
    public async getCursoLista() {
        return await cursoServices.getCursoList()
    }

    @Get('curso/{cursoCodigo}')
    public async getCursoPorCodigo(
        @Path() cursoCodigo: string
    ) {
        return await cursoServices.getCursoByIdCode(cursoCodigo)
    }

    @Post('crear-curso')
    public async crearCurso(
        @Body() curso: CreateCursoDTO
    ) {
        return await cursoServices.createCurso(curso)
    }

    @Put('actualizar-curso/{cursoCodigo}')
    public async actualizarCurso(
        @Path() cursoCodigo: string,
        @Body() curso: UpdateCursoDTO
    ) {
        return await cursoServices.actualizarCurso(cursoCodigo, curso)
    }
}