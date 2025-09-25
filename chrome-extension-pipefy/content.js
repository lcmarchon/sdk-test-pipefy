console.log('🚀 Pipefy WhatsApp Fix - Content Script carregado!');

// Função para corrigir a visibilidade e dimensões do WhatsApp
function fixWhatsAppIframe() {
    console.log('🔍 Procurando por iframes do WhatsApp...');
    
    // Procurar por elementos xComponent que podem estar invisíveis
    const xComponents = document.querySelectorAll('[class*="xcomponent"]');
    console.log(`📦 Encontrados ${xComponents.length} elementos xComponent`);
    
    xComponents.forEach((element, index) => {
        console.log(`🔧 Processando xComponent ${index + 1}:`, element);
        
        // Remover opacity: 0 que torna o elemento invisível
        if (element.style.opacity === '0' || element.style.opacity === '') {
            element.style.opacity = '1';
            console.log('✅ Opacity corrigido para 1');
        }
        
        // Ajustar dimensões se necessário
        if (element.classList.toString().includes('xcomponent')) {
            element.style.width = '100%';
            element.style.height = '680px';
            element.style.position = 'static';
            console.log('📏 Dimensões ajustadas');
        }
    });
    
    // Procurar especificamente por iframes do WhatsApp
    const allIframes = document.querySelectorAll('iframe');
    console.log(`🖼️ Encontrados ${allIframes.length} iframes total`);
    
    allIframes.forEach((iframe, index) => {
        const src = iframe.src;
        
        // Se for um iframe relacionado ao WhatsApp (contém whats.stegia.com.br)
        if (src && src.includes('whats.stegia.com.br')) {
            console.log(`📱 WhatsApp iframe encontrado:`, src);
            
            // Corrigir o iframe do WhatsApp
            iframe.style.opacity = '1';
            iframe.style.width = '510px';
            iframe.style.height = '680px';
            iframe.style.position = 'static';
            iframe.style.display = 'block';
            iframe.style.visibility = 'visible';
            
            // Corrigir o container pai se necessário
            let parent = iframe.parentElement;
            while (parent && parent !== document.body) {
                if (parent.style.opacity === '0') {
                    parent.style.opacity = '1';
                    console.log('✅ Opacity do container pai corrigido');
                }
                parent = parent.parentElement;
            }
            
            console.log('✅ WhatsApp iframe corrigido com sucesso!');
        }
        
        // Também verificar se é um iframe que pode conter o card-tab.html
        if (src && (src.includes('card-tab.html') || iframe.closest('[class*="xcomponent"]'))) {
            console.log(`📋 Card tab iframe encontrado:`, src);
            
            // Corrigir visibilidade
            iframe.style.opacity = '1';
            iframe.style.display = 'block';
            iframe.style.visibility = 'visible';
            
            // Corrigir container pai
            let parent = iframe.parentElement;
            while (parent && parent !== document.body) {
                if (parent.style.opacity === '0') {
                    parent.style.opacity = '1';
                    console.log('✅ Container pai do card-tab corrigido');
                }
                
                // Se for um xcomponent-outlet, ajustar dimensões
                if (parent.classList.toString().includes('xcomponent-outlet')) {
                    parent.style.width = '520px';
                    parent.style.height = '690px';
                    parent.style.position = 'static';
                    console.log('📐 xcomponent-outlet redimensionado');
                }
                
                parent = parent.parentElement;
            }
        }
    });
}

// Executar imediatamente
fixWhatsAppIframe();

// Observar mudanças no DOM (para quando novos elementos forem adicionados)
const observer = new MutationObserver(function(mutations) {
    let shouldRun = false;
    
    mutations.forEach(function(mutation) {
        // Se novos nós foram adicionados
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            for (let node of mutation.addedNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Se foi adicionado um iframe ou elemento xcomponent
                    if (node.tagName === 'IFRAME' || 
                        node.classList.toString().includes('xcomponent') ||
                        node.querySelector('iframe') ||
                        node.querySelector('[class*="xcomponent"]')) {
                        shouldRun = true;
                        break;
                    }
                }
            }
        }
        
        // Se atributos de estilo foram modificados
        if (mutation.type === 'attributes' && 
            (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
            const target = mutation.target;
            if (target.classList.toString().includes('xcomponent') || 
                target.tagName === 'IFRAME') {
                shouldRun = true;
            }
        }
    });
    
    if (shouldRun) {
        console.log('🔄 Mudanças detectadas no DOM, executando correção...');
        setTimeout(fixWhatsAppIframe, 100);
    }
});

// Começar a observar
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class']
});

// Executar novamente após um delay (para elementos que carregam mais tarde)
setTimeout(fixWhatsAppIframe, 2000);
setTimeout(fixWhatsAppIframe, 5000);

console.log('👀 Observer ativo - monitorando mudanças no DOM...');