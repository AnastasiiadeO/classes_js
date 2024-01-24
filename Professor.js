import User from "./User.js";

//Herdando construtor de User
export default class Professor extends User {
    constructor(nome, email, nascimento, role = 'professor', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }
//criando metodo de Professor
    aprovaEstudante(estudante, curso){
        //codigo de funcao
        return `estudante ${estudante} passou no curso ${curso}`;
    }

}