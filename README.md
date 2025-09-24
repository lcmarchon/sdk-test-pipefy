# Task Manager Pro - Pipefy SDK App

Este é um exemplo completo de implementação da funcionalidade `pipe-buttons` da SDK do Pipefy.

## Recursos Implementados

### 🔘 Pipe Buttons
- **Dashboard**: Dropdown com opções de métricas, performance e exportação
- **Tempo**: Controle de timer e relatórios de horas
- **Relatórios**: Sidebar com relatórios avançados  
- **Configurações**: Modal com configurações do projeto
- **Ajuda**: Link externo para documentação

### 🎴 Card Buttons
- **Cronômetro**: Timer específico para cards
- **Notas**: Modal para anotações dos cards

## Estrutura do Projeto

```
├── manifest.json           # Configuração do app
├── index.html              # Página principal
├── scripts/
│   └── main.js             # Lógica principal e SDK
├── styles/
│   └── main.css            # Estilos do aplicativo
├── pages/
│   ├── metrics.html        # Página de métricas
│   └── settings.html       # Página de configurações
└── assets/
    └── *.svg               # Ícones SVG (fill #FFFFFF)
```

## Funcionalidades da SDK Utilizadas

### Pipe Buttons
```javascript
'pipe-buttons': function(p, pipe) {
  return [
    {
      icon: './assets/dashboard-icon.svg',
      text: 'Dashboard',
      callback: function(p) {
        p.dropdown({ /* opções */ });
      }
    }
  ];
}
```

### Interações Disponíveis
- `p.dropdown()` - Exibe menu dropdown
- `p.sidebar()` - Abre sidebar lateral
- `p.modal()` - Exibe modal
- `p.showMessage()` - Mostra notificações
- `p.closeDropdown()` - Fecha dropdown ativo

## Como Usar

1. Faça upload dos arquivos para o GitHub
2. Configure o manifest.json com a URL do seu repositório
3. Registre o app no Pipefy usando a URL do manifest.json
4. Ative o app no pipe desejado

## Exemplos de Uso

O aplicativo demonstra diferentes padrões de uso:

- **Dropdowns com múltiplas opções**
- **Sidebars para relatórios**
- **Modals para configurações**
- **Links externos para documentação**
- **Mensagens de feedback**

## Personalização

Para personalizar o app:

1. Modifique o `manifest.json` com suas informações
2. Altere os ícones SVG (manter fill="#FFFFFF")
3. Adapte as funcionalidades no `scripts/main.js`
4. Customize o visual no `styles/main.css`

## Requisitos

- Ícones SVG com `fill="#FFFFFF"`
- URLs HTTPS para manifest.json
- Estrutura de arquivos respeitando caminhos relativos