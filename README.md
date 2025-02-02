meu-portfolio/
├── e2e/                       // Testes end-to-end
├── node_modules/
├── src/
│   ├── app/
│   │   ├── core/              // Módulo central, com serviços e componentes de uso global
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.component.ts
│   │   │   │   │   ├── header.component.html
│   │   │   │   │   └── header.component.css
│   │   │   │   └── footer/
│   │   │   │       ├── footer.component.ts
│   │   │   │       ├── footer.component.html
│   │   │   │       └── footer.component.css
│   │   │   ├── services/
│   │   │   │   └── ...       // Serviços de uso global, por exemplo, de API, autenticação, etc.
│   │   │   └── core.module.ts
│   │   │
│   │   ├── pages/             // Cada pasta aqui representa uma página/rota do site
│   │   │   ├── home/          // Página Inicial
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.css
│   │   │   │
│   │   │   ├── about/         // Sobre Mim
│   │   │   │   ├── about.component.ts
│   │   │   │   ├── about.component.html
│   │   │   │   └── about.component.css
│   │   │   │
│   │   │   ├── portfolio/     // Portfólio/Projetos
│   │   │   │   ├── portfolio.component.ts
│   │   │   │   ├── portfolio.component.html
│   │   │   │   └── portfolio.component.css
│   │   │   │
│   │   │   ├── blog/          // Blog ou Notícias
│   │   │   │   ├── blog.component.ts
│   │   │   │   ├── blog.component.html
│   │   │   │   └── blog.component.css
│   │   │   │
│   │   │   ├── contact/       // Contato
│   │   │   │   ├── contact.component.ts
│   │   │   │   ├── contact.component.html
│   │   │   │   └── contact.component.css
│   │   │   │
│   │   │   ├── resume/        // Currículo/Experiência
│   │   │   │   ├── resume.component.ts
│   │   │   │   ├── resume.component.html
│   │   │   │   └── resume.component.css
│   │   │   │
│   │   │   └── extras/        // Recursos adicionais (opcional)
│   │   │       ├── testimonials/  // Testemunhos/Depoimentos
│   │   │       │   ├── testimonials.component.ts
│   │   │       │   ├── testimonials.component.html
│   │   │       │   └── testimonials.component.css
│   │   │       ├── services-offered/  // Serviços Oferecidos
│   │   │       │   ├── services-offered.component.ts
│   │   │       │   ├── services-offered.component.html
│   │   │       │   └── services-offered.component.css
│   │   │       └── faq/       // FAQ
│   │   │           ├── faq.component.ts
│   │   │           ├── faq.component.html
│   │   │           └── faq.component.css
│   │   │
│   │   ├── shared/            // Componentes, modelos e serviços que podem ser reutilizados em várias páginas
│   │   │   ├── components/
│   │   │   │   └── card/      // Exemplo: componente para exibir cards de projetos, posts, etc.
│   │   │   │       ├── card.component.ts
│   │   │   │       ├── card.component.html
│   │   │   │       └── card.component.css
│   │   │   ├── models/        // Interfaces e modelos de dados
│   │   │   │   └── project.model.ts
│   │   │   └── services/      // Serviços que podem ser compartilhados
│   │   │       └── data.service.ts
│   │   │
│   │   ├── app-routing.module.ts  // Configuração de rotas para navegar entre as páginas
│   │   └── app.component.ts         // Componente raiz
│   │
│   ├── assets/                // Arquivos estáticos
│   │   ├── images/
│   │   ├── videos/
│   │   └── styles/            // Arquivos CSS globais, se necessário
│   │
│   └── environments/          // Configurações de ambiente (dev, prod, etc.)
│
├── angular.json
├── package.json
└── tsconfig.json

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
