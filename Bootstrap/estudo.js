class Funcionario {
  constructor (nome, idade) {
    this.nome = nome 
    this.idade = idade
    this.salario = 0
  }
  apresentar () {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos. `)
  }
  contarSalario () {
    console.log (`Eu ganho ${this.salario} reais por mês`)
  }
  atribuirSalario (salario) {
    this.salario = salario
    console.log(`${this.nome} agora ganha R$${this.salario}`)
  }
  passarCompras(compras) {
    let total = 0
    for (let i = 0; i < compras.length; i++) {
      console.log(`o funcionario ${this.nome} passou o item ${compras[i].nome}`)
      total += compras[i].preco
    }
    return total

    // 0. funcionario inicia o caixa
    // 1. funcionario pega as compras e registra no caixa;
    // 2. caixa soma o valor total da compra com o novo item;
    // 3. funcionario retorna o valor total das compras para o cliente;

  }
}

const funcionario1 = new Funcionario("Eduardo", 25)
funcionario1.apresentar()
funcionario1.contarSalario()
funcionario1.atribuirSalario(2000)
funcionario1.contarSalario()

const compras = [{nome: "banana", preco: 2.99}, {nome: "pão", preco: 7}, {nome: "requeijão", preco: 12.42}]
const total = funcionario1.passarCompras(compras)
console.log("seu total é de "+ total+ " reais.")
console.log(compras)
