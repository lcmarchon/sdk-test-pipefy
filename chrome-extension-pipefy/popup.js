// Função para executar script na aba ativa
async function executeInActiveTab(func) {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    
    if (!tab.url.includes('pipefy.com')) {
        document.getElementById('status-text').textContent = '⚠️ Abra uma página do Pipefy';
        return;
    }
    
    try {
        await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: func
        });
    } catch (error) {
        console.error('Erro ao executar script:', error);
        document.getElementById('status-text').textContent = '❌ Erro na execução';
    }
}

// Forçar execução da correção
async function forceRun() {
    document.getElementById('status-text').textContent = '🔄 Executando correção...';
    
    await executeInActiveTab(() => {
        // Código duplicado do content.js para execução manual
        console.log('🚀 Correção manual executada!');
        
        const xComponents = document.querySelectorAll('[class*="xcomponent"]');
        xComponents.forEach((element) => {
            if (element.style.opacity === '0' || element.style.opacity === '') {
                element.style.opacity = '1';
            }
            if (element.classList.toString().includes('xcomponent')) {
                element.style.width = '100%';
                element.style.height = '680px';
                element.style.position = 'static';
            }
        });
        
        const allIframes = document.querySelectorAll('iframe');
        allIframes.forEach((iframe) => {
            const src = iframe.src;
            
            if (src && src.includes('whats.stegia.com.br')) {
                iframe.style.opacity = '1';
                iframe.style.width = '510px';
                iframe.style.height = '680px';
                iframe.style.position = 'static';
                iframe.style.display = 'block';
                iframe.style.visibility = 'visible';
                
                let parent = iframe.parentElement;
                while (parent && parent !== document.body) {
                    if (parent.style.opacity === '0') {
                        parent.style.opacity = '1';
                    }
                    parent = parent.parentElement;
                }
            }
        });
    });
    
    setTimeout(() => {
        document.getElementById('status-text').textContent = '✅ Correção executada';
    }, 1000);
}

// Verificar elementos na página
async function checkElements() {
    document.getElementById('status-text').textContent = '🔍 Verificando elementos...';
    
    await executeInActiveTab(() => {
        const xComponents = document.querySelectorAll('[class*="xcomponent"]');
        const iframes = document.querySelectorAll('iframe');
        const whatsappIframes = Array.from(iframes).filter(iframe => 
            iframe.src && iframe.src.includes('whats.stegia.com.br')
        );
        
        console.log(`📊 Relatório de elementos:`);
        console.log(`- xComponents: ${xComponents.length}`);
        console.log(`- iframes total: ${iframes.length}`);
        console.log(`- iframes WhatsApp: ${whatsappIframes.length}`);
        
        // Mostrar detalhes dos elementos invisíveis
        xComponents.forEach((el, index) => {
            if (el.style.opacity === '0') {
                console.log(`⚠️ xComponent ${index + 1} invisível (opacity: 0)`);
            }
        });
    });
    
    setTimeout(() => {
        document.getElementById('status-text').textContent = '📋 Verifique o console';
    }, 1000);
}

// Disponibilizar funções globalmente
window.forceRun = forceRun;
window.checkElements = checkElements;