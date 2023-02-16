export type CreateCursoDTO = {
    titulo: string;
    imagen: string | null;
    codigo: string;
}

export type  UpdateCursoDTO = {
    titulo: string;
    imagen: string | null;
    estado: boolean;
}