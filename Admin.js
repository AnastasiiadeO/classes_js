import User from "./User.js"; //tem que ter .js

//Herdando construtor de User 
export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
       super(nome, email, nascimento, role, ativo);
    }

//criando metodo de Admin
    criarCurso(nomeDoCurso, quantidadeVagas) {
        //codigo de funcao
        return `Curso de ${nomeDoCurso} criado com ${quantidadeVagas} vagas`;
    }
}