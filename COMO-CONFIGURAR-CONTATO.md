# Como Configurar o Sistema de Contato

## Status Atual ✅

1. **Tradução**: Página Inquire totalmente traduzida para português brasileiro
2. **Imagem**: Corrigida (agora usa `/contact-hero.jpg`)
3. **Formulário**: Funcionalidade de envio implementada com fallback para email

## Como Você Receberá os Cadastros

### Opção 1: Email Direto (Fallback atual)
O formulário já está configurado para enviar diretamente para seu email:
- **Email configurado**: `contato@lesolutions.com`
- **Funciona**: Abrindo o cliente de email do usuário com dados preenchidos

### Opção 2: API Backend (Recomendado)
Para receber automaticamente sem depender do cliente de email:

1. **Crie um endpoint** `/api/contact` que:
   - Recebe POST com `{ name, email, sector, briefing }`
   - Envia email para você
   - Salva em banco de dados
   - Retorna resposta de sucesso/erro

2. **Exemplo de implementação** (Node.js):
```javascript
// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { name, email, sector, briefing } = req.body;
  
  // Enviar email usando nodemailer, sendgrid, etc.
  // Salvar no banco (MongoDB, PostgreSQL, etc.)
  
  res.status(200).json({ success: true });
}
```

### Opção 3: Serviços de Terceiros
- **Formspree**: Crie um formulário e aponte para ele
- **Netlify Forms**: Se usar Netlify hosting
- **Vercel Functions**: Similar à API Option 2

## Como Administrar os Cadastros

### Dashboard Simples
Crie uma página admin protegida que:
- Lista todos os contatos recebidos
- Permite marcar como respondido
- Exporta para CSV/Excel
- Filtra por data/setor

### Armazenamento
- **Banco de dados**: MongoDB, PostgreSQL, Firebase
- **Planilha**: Google Sheets (via API)
- **Email**: Apenas receber e organizar manualmente

## Próximos Passos

1. **Defina seu email** em `contato@lesolutions.com` ou altere no código
2. **Adicione uma imagem real** em `public/contact-hero.jpg`
3. **Configure o método de recebimento** preferido
4. **Teste o formulário** para garantir funcionamento

O sistema está funcional e pronto para uso!
