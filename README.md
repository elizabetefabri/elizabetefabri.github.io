# Cria o projeto (caso ainda não tenha)
ng new meu-portfolio --routing --style=css
cd meu-portfolio

# Módulo Core e Componentes Globais
ng g m app/core --module app
ng g c ./core/components/header
ng g c ./core/components/footer
ng g c ./core/components/div

# Pages Principais
ng g c ./pages/home
ng g c ./pages/about
ng g c ./pages/portfolio
ng g c ./pages/blog
ng g c ./pages/contact
ng g c ./pages/resume

# Pages de Recursos Extras
ng g c ./pages/extras/testimonials
ng g c ./pages/extras/services-offered
ng g c ./pages/extras/faq

# Shared Components, Serviços e Models
ng g c ./shared/components/card
ng g s ./shared/services/data
ng g class ./shared/models/social-media --type=model

ng build --prod --base-href "https://github.com/elizabetefabri/elizabetefabri.github.io.git"

# 📍 Importante lembrar:
- ## Toda vez que quiser atualizar seu site, rode:

```bash
ng build --base-href "https://elizabetefabri.github.io/"
npx angular-cli-ghpages --dir=dist/frontend
```
