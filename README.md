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

