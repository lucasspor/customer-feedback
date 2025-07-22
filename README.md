# Review Carousel

Um componente de carrossel de avaliações (testemunhos) simples e responsivo, que permite navegar entre diferentes revisores, exibindo suas fotos, nomes, cargos e comentários. O componente também suporta navegação aleatória e mantém a última avaliação visualizada usando o `localStorage`.

---

## Funcionalidades

- Navegação entre avaliações com botões "Próximo" e "Anterior".
- Exibição de uma avaliação aleatória com um botão dedicado.
- Armazenamento da última avaliação visualizada no `localStorage` para persistência de estado.
- Carregamento dinâmico das imagens dos revisores a partir do serviço [randomuser.me](https://randomuser.me).
- Suporte para perfis masculinos e femininos.

---

## Tecnologias Utilizadas

- JavaScript (ES6+)
- HTML5 e DOM API
- LocalStorage API

---

## Estrutura de Pastas

    /
    ├── index.html           # Página principal contendo o markup básico
    ├── css/
    │   └── styles.css       # Estilos do projeto
    ├── js/
    │   └── carousel.js      # Script JavaScript com a lógica do carrossel
    └── README.md            # Documentação do projeto

---

## Estrutura dos Dados

O array `reviewers` contém objetos que representam cada avaliador com os seguintes campos:

| Campo     | Tipo    | Descrição                                                    |
|-----------|---------|-------------------------------------------------------------|
| `icon`    | Number  | ID da imagem do revisor no serviço randomuser.me            |
| `name`    | String  | Nome completo do revisor                                     |
| `sex`     | String  | Sexo do revisor (`"men"` ou `"women"`) para carregar imagem correta |
| `position`| String  | Cargo profissional do revisor                                |
| `review`  | String  | Texto da avaliação/testemunho                                |

---

## Detalhes da Implementação

- Função `changePages(page)` atualiza a interface com os dados do revisor correspondente.
- O botão "Próximo" avança para o próximo avaliador, e ao chegar no último retorna ao primeiro.
- O botão "Anterior" volta para o avaliador anterior, e ao chegar no primeiro volta para o último.
- O botão "Aleatório" seleciona uma avaliação aleatoriamente.
- O estado atual é salvo no `localStorage` para manter a última avaliação vista.

---

## Licença

Este projeto é open-source e pode ser utilizado livremente.
