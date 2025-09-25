# Pipefy WhatsApp Fix - Extensão Chrome

Esta extensão corrige automaticamente problemas de visibilidade do WhatsApp Business no Pipefy.

## 🎯 Problema que resolve

- iframes do WhatsApp ficam invisíveis (opacity: 0) no Pipefy
- Dimensões incorretas dos elementos xComponent
- WhatsApp não carrega adequadamente nas abas dos cards

## 🚀 Como instalar

1. **Baixe ou clone este projeto**

2. **Abra o Chrome e vá para as extensões:**
   - Digite `chrome://extensions/` na barra de endereços
   - Ou vá em Menu > Mais ferramentas > Extensões

3. **Ative o modo desenvolvedor:**
   - No canto superior direito, ative a opção "Modo do desenvolvedor"

4. **Carregue a extensão:**
   - Clique em "Carregar sem compactação"
   - Selecione a pasta `chrome-extension-pipefy`
   - A extensão será instalada

## 📱 Como usar

1. **Instale a extensão** (seguindo os passos acima)

2. **Abra o Pipefy** em uma nova aba

3. **Navegue até um card** que tenha a aba WhatsApp

4. **A correção será aplicada automaticamente!**

## 🔧 Funcionalidades

### Automática
- **Detecção automática:** Identifica iframes do WhatsApp invisíveis
- **Correção de opacity:** Remove `opacity: 0` dos elementos
- **Ajuste de dimensões:** Define tamanhos corretos (510x680px)
- **Observer DOM:** Monitora mudanças e reaplica correções

### Manual (via popup da extensão)
- **Forçar Correção:** Execute manualmente se necessário
- **Verificar Elementos:** Diagnóstico de elementos na página
- **Status visual:** Veja o status da extensão

## 🛠️ O que a extensão faz

```javascript
// Encontra elementos invisíveis
const xComponents = document.querySelectorAll('[class*="xcomponent"]');

// Corrige a visibilidade
element.style.opacity = '1';

// Ajusta dimensões
iframe.style.width = '510px';
iframe.style.height = '680px';

// Monitora mudanças no DOM
const observer = new MutationObserver(/* ... */);
```

## 📋 Arquivos da extensão

- `manifest.json` - Configuração da extensão
- `content.js` - Script principal que faz as correções
- `popup.html/js` - Interface da extensão
- `README.md` - Este arquivo

## 🔍 Debug

Para verificar se está funcionando:

1. **Abra as Ferramentas do Desenvolvedor** (F12)
2. **Vá para a aba Console**
3. **Procure por logs da extensão:**
   ```
   🚀 Pipefy WhatsApp Fix - Content Script carregado!
   📱 WhatsApp iframe encontrado: ...
   ✅ WhatsApp iframe corrigido com sucesso!
   ```

## ⚠️ Notas importantes

- **Só funciona no Chrome** (ou browsers baseados em Chromium)
- **Precisa ser instalada manualmente** por cada usuário
- **Funciona apenas em páginas do Pipefy** (app.pipefy.com)
- **É segura** - só modifica estilos CSS, não dados

## 🔄 Atualizações

Se o Pipefy mudar sua estrutura HTML:
1. Abra o arquivo `content.js`
2. Atualize os seletores CSS conforme necessário
3. Recarregue a extensão em `chrome://extensions/`

## 📞 Suporte

Se a extensão não estiver funcionando:
1. Verifique o console do navegador
2. Use o botão "Verificar Elementos" no popup
3. Recarregue a página do Pipefy
4. Use o botão "Forçar Correção" no popup