
import { depatamentoSevices } from "../services/departamentoServices";
import { Get, Path, Route, Tags } from "tsoa";

@Route('departamento')
@Tags('Curso')
export class departamentoController {
    @Get('departamento-lista')
    public async getDepartamentoLista()
    {
        return  await depatamentoSevices.getDepartamentoServicio()
    }

    @Get('departamento/{codigoId}')
    public async getDepartamentoPorId(
        @Path() codigoId: number
    ) {
        return await depatamentoSevices.getDepartamentoPorId(codigoId)
    }
}