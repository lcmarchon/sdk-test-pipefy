// Task Manager Pro - GitHub Pages
console.log('🚀 Iniciando Task Manager Pro - GitHub Pages');

// Definição do PipefyApp seguindo documentação oficial
const PipefyApp = {
    'pipe-buttons': function(p, pipe) {
        console.log('📌 Pipe buttons chamado - pipe:', pipe);
        
        return [
            {
                icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4ca.svg',
                text: 'Dashboard',
                callback: function(p) {
                    console.log('✅ Dashboard clicado');
                    
                    p.dropdown({
                        title: 'Dashboard App',
                        items: [
                            {
                                title: 'Métricas',
                                callback: function(p) {
                                    console.log('📊 Métricas selecionado');
                                    p.showMessage({
                                        type: 'success',
                                        text: '📊 Abrindo métricas...'
                                    });
                                    p.closeDropdown();
                                }
                            },
                            {
                                title: 'Performance',
                                callback: function(p) {
                                    console.log('📈 Performance selecionado');
                                    p.showMessage({
                                        type: 'info',
                                        text: '📈 Carregando performance...'
                                    });
                                    p.closeDropdown();
                                }
                            },
                            {
                                title: 'Exportar',
                                callback: function(p) {
                                    console.log('💾 Exportar selecionado');
                                    p.showMessage({
                                        type: 'success',
                                        text: '💾 Exportando dados...'
                                    });
                                    p.closeDropdown();
                                }
                            }
                        ]
                    });
                }
            },
            {
                icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/23f1.svg',
                text: 'Timer',
                callback: function(p) {
                    console.log('✅ Timer clicado');
                    p.showMessage({
                        type: 'info',
                        text: '⏱️ Timer iniciado!'
                    });
                }
            }
        ];
    },
    
    'card-buttons': function(p, card) {
        console.log('🎴 Card buttons chamado - card:', card);
        
        return [
            {
                icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4dd.svg',
                text: 'Notas',
                callback: function(p) {
                    console.log('✅ Notas clicado para card:', card?.id);
                    p.showMessage({
                        type: 'success',
                        text: '📝 Abrindo notas do card!'
                    });
                }
            }
        ];
    }
};

// Exposição robusta do PipefyApp
function exposePipefyApp() {
    try {
        // Exposição principal
        window.PipefyApp = PipefyApp;
        
        // Verificação
        if (window.PipefyApp) {
            console.log('✅ PipefyApp exposto no window');
            console.log('🔍 Funções:', Object.keys(PipefyApp));
            
            // Update UI se existir
            const statusEl = document.getElementById('status');
            if (statusEl) {
                statusEl.innerHTML = '✅ SDK carregada - GitHub Pages!';
                statusEl.style.color = '#10B981';
            }
        }
        
    } catch (error) {
        console.error('❌ Erro ao expor PipefyApp:', error);
    }
}

// Inicialização
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', exposePipefyApp);
} else {
    exposePipefyApp();
}

// Fallback
setTimeout(exposePipefyApp, 100);

console.log('📋 App carregado para GitHub Pages');