//Criação de construtor de User usando encapsulamento com Getters e Setters
export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
        constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

get nome() {
    return this.#nome;
}
get email() {
    return this.#email;
}
get nascimento() {
    return this.#nascimento;
}
get role() {
    return this.#role;
}
get ativo() {
    return this.#ativo;
}

set nome(novoNome) {
    if (novoNome === ''){
        throw new Error(`formato nao valido`);
    }
    this.#nome = novoNome;
}    
set email(novoEmail) {
    if (novoEmail === ''){
        throw new Error(`formato nao valido`);
    }
    this.#email = novoEmail;
}
set nascimento(novoNascimento) {
    if (novoNascimento === ''){
        throw new Error(`formato nao valido`);
    }
    this.#nascimento = novoNascimento;
}

//criando metodo de Admin
    exibirInfos() {
        return `${this.nome}, ${this.role}, ${this.email}`;
    }
}