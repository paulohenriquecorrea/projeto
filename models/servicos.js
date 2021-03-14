const conexao = require('../infraestrutura/conexao');

class Servico {
  adiciona(servico) {
    const sql = `INSERT INTO Servicos(nome, preco) VALUES('${servico.nome}', '${servico.preco}')`;
    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resultados);
      }
    });
  }
}

module.exports = new Servico();
