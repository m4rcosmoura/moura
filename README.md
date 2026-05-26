# Painel TV para GitHub Pages

## Estrutura
- `index.html` -> exibe as imagens em loop
- `images.json` -> lista das imagens
- `imagens/` -> pasta das imagens

## Como funciona
- Lê automaticamente quantas imagens existirem no `images.json`
- Pode funcionar com 1 imagem ou com 100 imagens
- Se alguma imagem estiver com nome errado, ela é ignorada sem mostrar erro na tela
- Recarrega a página a cada 1 minuto para pegar atualizações do GitHub

## Exemplo de `images.json`
[
  "imagens/slide1.jpg",
  "imagens/slide2.jpg",
  "imagens/slide3.jpg",
  'imagens/slide4".jpg
]

## Como atualizar
1. Coloque as imagens na pasta `imagens`
2. Edite o `images.json`
3. Faça commit no GitHub

## Atenção
Os nomes no `images.json` precisam bater exatamente com os nomes reais dos arquivos.
