<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 1-2: Lidando com objetos e vetores
</h3>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Desafios para fortalecer alguns conceitos, entre eles:

- **Objetos**;
- **Vetores**.

Este programa armazena dados da empresa Rocketseat dentro de um objeto chamado `empresa`.
Neste progrma o nome da empresa e seu endereço será impresso na tela no seguinte formato:

```
A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
```
_Obs. Foi utilizado o template string para impressão dos dados.

### Vetores e objetos

Este programa armazena os dados do programador, exemplo:
`nome`, `idade` e `tecnologias`.
Este programador pode trabalhar com várias tecnologias e essas foram armazenadas em um array.
Cada tecnologia é um objeto no código, para que seja especificado algumas particularidades destas tecnologias.

Exemplo:

```js
const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
```

É impresso em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

```
O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.


