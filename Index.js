import User from "./User.js";
import Admin from "./Admin.js";
import Professor from "./Professor.js";

//criando novo User
const novoUser = new User('Olga', 'ola@o.com', '2000-01-01');
console.log(`Novo User foi criado: "${novoUser.nome}", o role é ${novoUser.role}`); //Novo User foi criado: "Olga", o role é estudante

//criando novo Admin
const novoAdmin = new Admin ('Lucas', 'lucas@l.com', '2001-01-01');

//exibindo metodo de User dentro de Admin
console.log(`Novo Admin foi criado: ${novoAdmin.exibirInfos()}`); //Novo Admin foi criado: Lucas, admin, lucas@l.com

//exibindo metodo de Admin
console.log(novoAdmin.criarCurso('"JavaScript"', 15)); //Curso de "JavaScript" criado com 15 vagas

//criando novo Professor
const professorNastia = new Professor('Lena', 'n@n.com', '1999-01-01');
console.log(`Novo Professor foi criado: "${professorNastia.nome}"`); //Novo Professor foi criado: "Lena"

//mudando nome do novo Professor
professorNastia.nome = 'Nastia';
console.log(`Nome do Professor foi trocado pelo novo nome "${professorNastia.nome}"`);//Nome do Professor foi trocado pelo novo nome "Nastia"

//exibindo metodo de Professor
console.log(professorNastia.aprovaEstudante('Olga', 'JavaScript')); //estudante Olga passou no curso JavaScript

//mudando o email de novo User para aparecer o erro programado
novoUser.email = '';
console.log(novoUser.email); //throw new Error(`formato nao valido`)...