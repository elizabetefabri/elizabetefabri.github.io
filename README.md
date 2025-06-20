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

ng g c pages/guides/aws-practitioner/mapa-mental
ng g c pages/guides/aws-practitioner/guia-estudo
ng g c pages/guides/aws-practitioner/computacao-nuvem
ng g c pages/guides/aws-practitioner/iam
ng g c pages/guides/aws-practitioner/ec2
ng g c pages/guides/aws-practitioner/armazenamento-ec2
ng g c pages/guides/aws-practitioner/balanceamento-dimensionamento
ng g c pages/guides/aws-practitioner/amazon-s3

ng g c pages/guides/aws-practitioner/db-analytics
ng g c pages/guides/aws-practitioner/compute
ng g c pages/guides/aws-practitioner/infra-escala
ng g c pages/guides/aws-practitioner/infra-global
ng g c pages/guides/aws-practitioner/integracao-nuvem
ng g c pages/guides/aws-practitioner/monitoramento
ng g c pages/guides/aws-practitioner/vpc
ng g c pages/guides/aws-practitioner/seguranca
ng g c pages/guides/aws-practitioner/machine-learning
ng g c pages/guides/aws-practitioner/gerenciamento
ng g c pages/guides/aws-practitioner/identidade
ng g c pages/guides/aws-practitioner/outros-servicos
ng g c pages/guides/aws-practitioner/arquitetura-ecossistema

<a routerLink="./mapa">Mapa mental para delinear tópicos essenciais</a>
<a routerLink="./guia">Guia de estudo</a>
<a routerLink="./nuvem">Computação em Nuvem</a>
<a routerLink="./iam">IAM: Acesso e Gerenciamento de Identidade</a>
<a routerLink="./ec2">EC2: Máquinas Virtuais</a>
<a routerLink="./storage-ec2">Armazenamento de instância EC2</a>
<a routerLink="./balanceamento">Grupos de balanceamento e dimensionamento automático</a>
<a routerLink="./s3">Amazon S3</a>

<a routerLink="./db-analytics">Bancos de dados e análises</a>
<a routerLink="./compute">Outras Seções de Computação</a>
<a routerLink="./infra-escala">Implantando e gerenciando infraestrutura em escala</a>
<a routerLink="./infra-global">Infraestrutura Global</a>
<a routerLink="./integracao-nuvem">Integração em Nuvem</a>
<a routerLink="./monitoramento">Monitoramento de Nuvem</a>
<a routerLink="./vpc">VPC</a>
<a routerLink="./seguranca">Segurança e Conformidade</a>
<a routerLink="./machine-learning">Aprendizado de Máquina</a>
<a routerLink="./gerenciamento">Gerenciamento de contas, faturamento e suporte</a>
<a routerLink="./identidade">Identidade Avançada</a>
<a routerLink="./outros-servicos">Outros serviços da AWS</a>
<a routerLink="./arquitetura-ecossistema">Arquitetura e Ecossistema da AWS</a>


const routes: Routes = [
  { path: '', component: AwsPractitionerComponent },
  { path: 'mapa', component: MapaMentalComponent },
  { path: 'guia', component: GuiaEstudoComponent },
  { path: 'nuvem', component: ComputacaoNuvemComponent },
  { path: 'iam', component: IamComponent },
  { path: 'ec2', component: Ec2Component },
  { path: 'storage-ec2', component: ArmazenamentoEc2Component },
  { path: 'balanceamento', component: BalanceamentoDimensionamentoComponent },
  { path: 's3', component: AmazonS3Component },

  { path: 'db-analytics', component: DbAnalyticsComponent },
  { path: 'compute', component: ComputeComponent },
  { path: 'infra-escala', component: InfraEscalaComponent },
  { path: 'infra-global', component: InfraGlobalComponent },
  { path: 'integracao-nuvem', component: IntegracaoNuvemComponent },
  { path: 'monitoramento', component: MonitoramentoComponent },
  { path: 'vpc', component: VpcComponent },
  { path: 'seguranca', component: SegurancaComponent },
  { path: 'machine-learning', component: MachineLearningComponent },
  { path: 'gerenciamento', component: GerenciamentoComponent },
  { path: 'identidade', component: IdentidadeComponent },
  { path: 'outros-servicos', component: OutrosServicosComponent },
  { path: 'arquitetura-ecossistema', component: ArquiteturaEcossistemaComponent },
];
