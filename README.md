# REVO Esteiras – Site institucional

Site estático (HTML, CSS e JS puros), sem etapa de build.

## Estrutura
```
index.html            página única
favicon.png
robots.txt
assets/
  css/style.css       estilos (cores em variáveis no :root)
  js/main.js          menu, galeria ampliada e formulário (envia para o WhatsApp)
  img/
    logos/            logotipos
    produtos/         fotos de produtos
    fabrica/          fotos de linhas de produção e instalações
```

## Editar
- Número do WhatsApp: buscar `5541998536600` em `index.html` e `assets/js/main.js`.
- Redes sociais: links `href="#"` na seção Contato do `index.html`.
- Novas fotos: colocar em `assets/img/<pasta>/` (JPG, até 1600 px de largura) e referenciar no `index.html`.

## Deploy
- **GitHub Pages:** Settings → Pages → Deploy from a branch → `main` / `(root)`.
- **Netlify / Cloudflare Pages / Vercel:** conectar o repositório; sem comando de build, pasta de publicação `/` (raiz).
