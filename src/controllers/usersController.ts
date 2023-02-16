import { Body, Controller, Get, Post, Route } from "tsoa";

@Route('user')
export class usersController extends Controller {

    @Get('get-user')
    public async getUser() {
        return await 'Bienvenido Api Usuario'
    }

    @Post('add-user')
    public async addUser(
        @Body() body: {nombre:string, edad:number}
    ): Promise<{nombre:string, edad:number}> {
        console.log('Respuesta Correcta');
        return await body;
    }

    @Get('show-user')
    public async showUser(): Promise<{nombre:string, apellidos:string, sexo:string, edad:number, lenguaje:string}[]> {
        return await [
            {nombre: "Luisa", apellidos: "Hermosa", sexo: "F", edad: 15, lenguaje: "Javascript"},
            {nombre: "Sandrita", apellidos: "Bella", sexo: "F", edad: 15, lenguaje: "Javascript"},
            {nombre: "Devora", apellidos: "Devos", sexo: "F", edad: 15, lenguaje: "Javascript"}
        ];
    }
}