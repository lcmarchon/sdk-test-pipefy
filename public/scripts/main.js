// Pipefy SDK Implementation
(function() {
    'use strict';

    // Configuração principal do aplicativo - VERSÃO SIMPLIFICADA
    const PipefyApp = {
        // Implementação da funcionalidade pipe-buttons
        'pipe-buttons': function(p, pipe) {
            console.log('Pipe buttons called for pipe:', pipe);
            
            return [
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4ca.svg',
                    text: 'Dashboard',
                    callback: function(p) {
                        console.log('Dashboard clicked');
                        p.showMessage({
                            type: 'info',
                            text: 'Dashboard funcionando!',
                            timeout: 2000
                        });
                    }
                },
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/23f1.svg',
                    text: 'Timer',
                    callback: function(p) {
                        console.log('Timer clicked');
                        p.showMessage({
                            type: 'info',
                            text: 'Timer funcionando!',
                            timeout: 2000
                        });
                    }
                }
            ];
        },

        // Implementação de botões nos cards
        'card-buttons': function(p, card) {
            console.log('Card buttons called for card:', card);
            
            return [
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4dd.svg',
                    text: 'Notas',
                    callback: function(p) {
                        console.log('Notes clicked for card:', card.title);
                        p.showMessage({
                            type: 'success',
                            text: `Notas para: ${card.title}`,
                            timeout: 2000
                        });
                    }
                }
            ];
        }
    };

    // Logs para debug
    console.log('Task Manager Pro - Script carregado');
    console.log('PipefyApp object:', PipefyApp);

    // Expor o objeto PipefyApp globalmente - CRÍTICO!
    if (typeof window !== 'undefined') {
        window.PipefyApp = PipefyApp;
        console.log('PipefyApp exposed to window');
    }

    // Fallback para diferentes ambientes
    if (typeof global !== 'undefined') {
        global.PipefyApp = PipefyApp;
    }

    // Para Node.js/CommonJS
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = PipefyApp;
    }

    // Inicialização quando o documento estiver pronto
    if (typeof document !== 'undefined') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM ready - PipefyApp inicializado');
        });
    }

})();