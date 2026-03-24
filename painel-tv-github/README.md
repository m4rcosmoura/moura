# Painel TV para GitHub Pages

## Arquivos
- `index.html` -> página que exibe as imagens em loop
- `images.json` -> lista das imagens exibidas
- `imagens/` -> pasta onde ficam os arquivos de imagem

## Como usar
1. Suba todos os arquivos para um repositório no GitHub.
2. Crie a pasta `imagens`.
3. Coloque suas imagens dentro dela.
4. Edite o `images.json` com os nomes corretos.
5. Ative o GitHub Pages nas configurações do repositório.

## Exemplo do `images.json`
[
  "imagens/slide1.jpg",
  "imagens/slide2.jpg",
  "imagens/slide3.jpg"
]

## Como atualizar
- Adicione, remova ou troque imagens na pasta `imagens`
- Atualize o `images.json`
- Faça commit

A TV recarrega a página a cada 1 minuto e pega as alterações.
