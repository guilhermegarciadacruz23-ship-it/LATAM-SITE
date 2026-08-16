# Almoxarifado CWB

Site institucional fictício para apresentar a operação do almoxarifado da base CWB da LATAM, com foco em recebimento, armazenagem, distribuição e suporte logístico à manutenção de aeronaves.

## Visão geral

Este projeto é uma landing page em HTML, CSS e JavaScript, criada para transmitir uma identidade visual profissional, técnica e operacional, adequada a um ambiente de manutenção aeronáutica.

O site apresenta:
- uma narrativa sobre a operação do almoxarifado
- seções de destaque para processos principais
- uma área de contato com e-mail e telefone
- link para a escala CWB
- interação de navegação e feedback visual

## Objetivo

O objetivo do site é comunicar de forma clara e objetiva que o almoxarifado CWB é responsável por:
- receber materiais e insumos
- armazenar com organização e rastreabilidade
- distribuir itens conforme demanda operacional
- apoiar a manutenção de aeronaves com agilidade e controle

## Estrutura do projeto

```text
files/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/   (opcional, caso seja adicionado no futuro)
```

## Arquivos principais

### index.html
Contém a estrutura completa da página, incluindo:
- cabeçalho com navegação
- hero section com chamada principal
- seção “Sobre”
- seção de operação com destaques
- seção de contato
- rodapé

### style.css
Responsável por toda a identidade visual do projeto:
- paleta de cores
- tipografia
- layout responsivo
- cards, botões, navegação e hero section
- estilos para dispositivos móveis

### script.js
Controla interações da interface, como:
- rolagem suave para links internos
- menu mobile
- animações de entrada ao rolar a página
- efeito de “porta do galpão” no hero
- cópia de e-mail e telefone para a área de transferência
- atualização automática do ano no rodapé

## Funcionalidades incluídas

### Navegação interna
Os links do menu e dos botões levam para as seções da página com rolagem suave.

### Menu mobile
Em telas menores, o menu se transforma em um layout compacto com botão de abertura.

### Animações suaves
A página usa transitions e reveal effects para melhorar a experiência visual sem exagerar na movimentação.

### Cópia de contato
Os botões de e-mail e telefone permitem copiar o conteúdo com um clique, exibindo feedback visual.

### Design institucional
A aparência foi pensada para manter um tom profissional, enxuto e tecnológico, adequado ao ambiente de manutenção aérea.

## Paleta visual

A interface utiliza uma combinação de:
- azul escuro para transmitir confiabilidade e institucionalidade
- crema claro para suavizar o visual
- cinza e tons neutros para manter leitura e elegância
- verde para indicar status operacional

## Tipografia

O site usa fontes inspiradas em identidade corporativa e técnica, com destaque para:
- títulos fortes e compactos
- textos de corpo mais legíveis
- labels em estilo monoespacial para reforçar sensação de controle e organização

## Como visualizar o site

Basta abrir o arquivo `index.html` em um navegador.

Se preferir usar um servidor local, pode rodar algo como:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Observações

Este é um projeto front-end estático, sem back-end ou banco de dados. Ele foi desenvolvido para fins de apresentação visual e institucional, com foco em uma identidade funcional e profissional.

## Possíveis melhorias futuras

- adicionar galeria de imagens da base e operação
- incluir informações mais detalhadas sobre processos internos
- criar versão em inglês
- integrar formulário de contato real
- conectar com dados dinâmicos de escala ou calendário

## Resumo

O Almoxarifado CWB é uma landing page voltada para apresentar a operação logística de suporte à manutenção aérea de forma clara, técnica e visualmente sólida. O projeto combina organização visual, microinterações e linguagem institucional para reforçar credibilidade e profissionalismo.
