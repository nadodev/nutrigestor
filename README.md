# Template SaaS - Sistema de Assinaturas

Este é um template SaaS (Software as a Service) completo, desenvolvido com Next.js, que oferece um sistema de assinaturas com integração ao Stripe para processamento de pagamentos.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React para desenvolvimento web
- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Biblioteca de componentes UI
- **Stripe** - Plataforma de pagamentos
- **Firebase Admin** - Backend como serviço
- **NextAuth.js** - Autenticação
- **Lucide React** - Biblioteca de ícones

## 📋 Funcionalidades

### Sistema de Pagamentos
- Integração completa com Stripe
- Checkout de pagamento
- Gerenciamento de assinaturas
- Portal do cliente Stripe
- Histórico de pagamentos

### Autenticação
- Sistema de login e registro
- Proteção de rotas
- Gerenciamento de sessão

### Interface do Usuário
- Design moderno e responsivo
- Componentes reutilizáveis
- Animações suaves
- Layout adaptativo

## 🛠️ Estrutura do Projeto

```
template-saas/
├── app/                    # Diretório principal da aplicação
│   ├── (projeto)/         # Rotas do projeto
│   ├── api/               # API Routes
│   ├── components/        # Componentes compartilhados
│   ├── hooks/            # Hooks personalizados
│   ├── lib/              # Utilitários e configurações
│   └── server/           # Lógica do servidor
├── components/            # Componentes UI
├── lib/                  # Bibliotecas e utilitários
├── public/               # Arquivos estáticos
└── src/                  # Código fonte
```

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` com as seguintes variáveis:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=sua_chave_publica_stripe
STRIPE_SECRET_KEY=sua_chave_secreta_stripe
STRIPE_WEBHOOK_SECRET=seu_webhook_secret
NEXT_PUBLIC_FIREBASE_API_KEY=sua_chave_api_firebase
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_dominio_firebase
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_projeto_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

5. Acesse `http://localhost:3000` no seu navegador

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a versão de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🔒 Segurança

- Autenticação segura com NextAuth.js
- Proteção de rotas
- Validação de dados
- Sanitização de inputs
- Proteção contra CSRF

## 📱 Responsividade

- Design responsivo para todos os dispositivos
- Layout adaptativo
- Componentes otimizados para mobile
- Performance otimizada

## 🎨 Design System

- Utilização do Shadcn/ui para componentes
- Tema personalizável
- Cores e tipografia consistentes
- Animações e transições suaves

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Para mais informações ou suporte, entre em contato através do email: [seu-email@exemplo.com]
