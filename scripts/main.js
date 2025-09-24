// 🚀 Pipefy SDK - Task Manager Pro v5
(function() {
    'use strict';

    console.log('🔄 Carregando PipefyApp...');

    // Configuração do aplicativo
    const PipefyApp = {
        // Pipe Buttons - Botões no cabeçalho do pipe
        'pipe-buttons': function(p, pipe) {
            console.log('🔘 Pipe buttons executado para:', pipe.name);
            
            return [
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4ca.svg',
                    text: 'Dashboard',
                    callback: function(p) {
                        console.log('📊 Dashboard clicado');
                        p.showMessage({
                            type: 'success',
                            text: '📊 Dashboard v5 funcionando!',
                            timeout: 3000
                        });
                    }
                },
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/23f1.svg',
                    text: 'Timer',
                    callback: function(p) {
                        console.log('⏱️ Timer clicado');
                        p.showMessage({
                            type: 'info',
                            text: '⏱️ Timer v5 ativo!',
                            timeout: 3000
                        });
                    }
                },
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4c8.svg',
                    text: 'Relatórios',
                    callback: function(p) {
                        console.log('📈 Relatórios clicado');
                        p.showMessage({
                            type: 'warning',
                            text: '📈 Relatórios v5 carregados!',
                            timeout: 3000
                        });
                    }
                }
            ];
        },

        // Card Buttons - Botões nos cards
        'card-buttons': function(p, card) {
            console.log('🎴 Card buttons executado para:', card.title);
            
            return [
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4dd.svg',
                    text: 'Notas',
                    callback: function(p) {
                        console.log('📝 Notas clicada para:', card.title);
                        p.showMessage({
                            type: 'success',
                            text: `📝 Notas v5 para "${card.title}"`,
                            timeout: 3000
                        });
                    }
                },
                {
                    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/23f0.svg',
                    text: 'Cronômetro',
                    callback: function(p) {
                        console.log('⏰ Cronômetro clicado para:', card.title);
                        p.showMessage({
                            type: 'info',
                            text: `⏰ Cronômetro v5 iniciado para "${card.title}"`,
                            timeout: 3000
                        });
                    }
                }
            ];
        }
    };

    // Exposição global - CRÍTICO!
    window.PipefyApp = PipefyApp;
    
    // Debug
    console.log('✅ PipefyApp v5 exposto globalmente');
    console.log('🔍 Funções disponíveis:', Object.keys(PipefyApp));
    
    // Fallbacks para diferentes ambientes
    if (typeof global !== 'undefined') {
        global.PipefyApp = PipefyApp;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = PipefyApp;
    }

})();