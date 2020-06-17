const usuario = {
  nome: 'Guilherme',
  empresa: {
    nome: 'Rocketseat',
    cor: 'roxo',
    foco: 'Programação',
    endereço: {
      rua: 'Rua Guilherme Gembala',
      numero: 260,
    },
  },
};

console.log(
  `A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.rua}, ${usuario.empresa.nome}.`
);
