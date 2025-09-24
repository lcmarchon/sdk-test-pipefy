// SDK Test Pipefy - Main App
console.log('🚀 Iniciando SDK Test Pipefy');

// Definição do PipefyApp
const PipefyApp = {
    'pipe-buttons': function(p, pipe) {
        console.log('📌 Pipe buttons chamado:', pipe);
        
        return [
            {
                icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4ca.svg',
                text: 'Dashboard',
                callback: function(p) {
                    console.log('✅ Dashboard clicado');
                    if (p && p.showMessage) {
                        p.showMessage({
                            type: 'success',
                            text: '📊 Dashboard ativo!'
                        });
                    }
                }
            },
            {
                icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/23f1.svg',
                text: 'Timer',
                callback: function(p) {
                    console.log('✅ Timer clicado');
                    if (p && p.showMessage) {
                        p.showMessage({
                            type: 'info',
                            text: '⏱️ Timer iniciado!'
                        });
                    }
                }
            }
        ];
    },
    
    'card-buttons': function(p, card) {
        console.log('🎴 Card buttons chamado:', card);
        
        return [
            {
                icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4dd.svg',
                text: 'Notas',
                callback: function(p) {
                    console.log('✅ Notas clicado');
                    if (p && p.showMessage) {
                        p.showMessage({
                            type: 'success',
                            text: '📝 Abrindo notas...'
                        });
                    }
                }
            }
        ];
    }
};

// Exposição segura do PipefyApp
function exposePipefyApp() {
    try {
        // Global window
        window.PipefyApp = PipefyApp;
        
        // Module exports (se existir)
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = PipefyApp;
        }
        
        // Verificação
        if (window.PipefyApp) {
            console.log('✅ PipefyApp exposto com sucesso');
            console.log('🔍 Funções disponíveis:', Object.keys(PipefyApp));
            
            // Update UI
            const statusEl = document.getElementById('status');
            if (statusEl) {
                statusEl.innerHTML = '✅ SDK carregada com sucesso!';
                statusEl.style.color = '#10B981';
            }
        }
        
    } catch (error) {
        console.error('❌ Erro ao expor PipefyApp:', error);
        
        const statusEl = document.getElementById('status');
        if (statusEl) {
            statusEl.innerHTML = '❌ Erro ao carregar SDK';
            statusEl.style.color = '#EF4444';
        }
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', exposePipefyApp);

// Fallback
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', exposePipefyApp);
} else {
    exposePipefyApp();
}

setTimeout(exposePipefyApp, 100);

console.log('📋 SDK Test Pipefy carregado');