const conexao = require('../infraestrutura/database/conexao');
const uploadDeArquivos = require('../infraestrutura/arquivos/uploadDeArquivos');

class Pet {
  adiciona(pet, res) {
    const query = 'INSERT INTO Pets SET ?';

    uploadDeArquivos(pet.imagem, pet.nome, (erro, caminhoImagemSalva) => {
      if (erro) {
        res.status(400).json({ erro });
      } else {
        const novoPet = { nome: pet.nome, imagem: caminhoImagemSalva };
        conexao.query(query, novoPet, (erro) => {
          if (erro) {
            console.log(erro);
            res.status(400).json(erro);
          } else {
            res.status(200).json(novoPet);
          }
        });
      }
    });
  }
}

module.exports = new Pet();
