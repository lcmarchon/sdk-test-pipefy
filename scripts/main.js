// Pipefy App - Task Manager Pro v6
// Versão corrigida para erros undefined

console.log('🚀 Iniciando Task Manager Pro v6');

// Aguarda DOM estar pronto
function initPipefyApp() {
    console.log('🔄 Inicializando PipefyApp...');
    
    // Definição mais robusta do PipefyApp
    const PipefyApp = {
        'pipe-buttons': function(p, pipe) {
            console.log('📌 Pipe buttons chamado para:', pipe?.name || 'pipe desconhecido');
            
            // Retorna array de botões válidos
            return [
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4ca.svg',
                    text: 'Dashboard v6',
                    callback: function(p) {
                        console.log('✅ Dashboard v6 clicado');
                        if (p && p.showMessage) {
                            p.showMessage({
                                type: 'success',
                                text: '📊 Dashboard v6 funcionando!',
                                timeout: 3000
                            });
                        }
                    }
                },
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/23f1.svg',
                    text: 'Timer v6',
                    callback: function(p) {
                        console.log('✅ Timer v6 clicado');
                        if (p && p.showMessage) {
                            p.showMessage({
                                type: 'info',
                                text: '⏱️ Timer v6 ativo!',
                                timeout: 3000
                            });
                        }
                    }
                }
            ];
        },
        
        'card-buttons': function(p, card) {
            console.log('🎴 Card buttons chamado para:', card?.title || 'card desconhecido');
            
            // Retorna array de botões válidos
            return [
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4dd.svg',
                    text: 'Notas v6',
                    callback: function(p) {
                        console.log('✅ Notas v6 clicado');
                        if (p && p.showMessage) {
                            p.showMessage({
                                type: 'success',
                                text: '📝 Notas v6 funcionando!',
                                timeout: 3000
                            });
                        }
                    }
                }
            ];
        }
    };

    // Exposição global mais robusta
    try {
        window.PipefyApp = PipefyApp;
        console.log('✅ PipefyApp exposto no window');
        
        // Backup para diferentes contextos
        if (typeof global !== 'undefined') {
            global.PipefyApp = PipefyApp;
            console.log('✅ PipefyApp exposto no global');
        }
        
        // Verificação final
        if (window.PipefyApp) {
            console.log('🎯 PipefyApp disponível:', typeof window.PipefyApp);
            console.log('🔍 Funções:', Object.keys(window.PipefyApp));
        } else {
            console.error('❌ Erro: PipefyApp não foi exposto!');
        }
        
    } catch (error) {
        console.error('❌ Erro ao expor PipefyApp:', error);
    }
}

// Inicialização imediata e com fallbacks
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPipefyApp);
} else {
    initPipefyApp();
}

// Fallback adicional
setTimeout(initPipefyApp, 100);

console.log('📋 Script carregado - aguardando inicialização');