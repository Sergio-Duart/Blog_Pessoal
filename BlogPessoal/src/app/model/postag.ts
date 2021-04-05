import { tema } from "./tema";
import { usuario } from "./usuario";

export class postag{
    public id: number
    public titulo: string
    public conteudo: string
    public data: Date
    public atriUsuario: usuario
    public atriTema: tema
}