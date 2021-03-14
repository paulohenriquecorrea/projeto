const Servico = require('../models/servicos');

module.exports = (app) => {
  app.get('/servicos', (req, res) => res.send('Você está na rota de servicos'));
  app.post('/servicos', (req, res) => {
    const servico = req.body;
    Servico.adiciona(servico);
    res.send('Post Servicos');
  });
};
