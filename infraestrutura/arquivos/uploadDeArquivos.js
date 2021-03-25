const fs = require('fs'); //biblioteca nativa do node
const path = require('path'); //biblioteca nativa do node

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
  const tipoValidos = ['jpg', 'png', 'jpeg'];
  const tipo = path.extname(caminho);
  const tipoEhValido = tipoValidos.includes(tipo.substring(1));

  if (tipoEhValido) {
    const caminhoImagemSalva = `./assets/imagens/${nomeDoArquivo}${tipo}`;

    fs.createReadStream(caminho).pipe(
      fs.createWriteStream(caminhoImagemSalva).on('finish', () => {
        callbackImagemCriada(false, caminhoImagemSalva);
      })
    );
  } else {
    const erro = 'Tipo inválido';
    callbackImagemCriada(erro);
  }
};
