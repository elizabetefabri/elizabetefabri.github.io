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
ng generate module app/core --module app
ng generate component app/core/components/header
ng generate component app/core/components/footer

# Pages Principais
ng generate component app/pages/home
ng generate component app/pages/about
ng generate component app/pages/portfolio
ng generate component app/pages/blog
ng generate component app/pages/contact
ng generate component app/pages/resume

# Pages de Recursos Extras
ng generate component app/pages/extras/testimonials
ng generate component app/pages/extras/services-offered
ng generate component app/pages/extras/faq

# Shared Components, Serviços e Models
ng generate component app/shared/components/card
ng generate service app/shared/services/data
ng generate class app/shared/models/project --type=model

