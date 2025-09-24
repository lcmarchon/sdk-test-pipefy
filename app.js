// SDK Test Pipefy - Seguindo documentação oficial
console.log('🚀 Iniciando SDK Test Pipefy - Versão Oficial');

// Definição do PipefyApp seguindo a documentação oficial
const PipefyApp = {
    'pipe-buttons': function(p, pipe) {
        console.log('📌 Pipe buttons chamado - pipe:', pipe);
        
        return [
            {
                icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4ca.svg',
                text: 'Dashboard',
                callback: function(p) {
                    console.log('✅ Dashboard clicado');
                    
                    // Usando dropdown conforme documentação
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
                                title: 'Exportar Dados',
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
                    
                    // Usando sidebar conforme documentação
                    p.sidebar({
                        title: 'Controle de Tempo',
                        url: './timer.html'
                    });
                }
            },
            {
                icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4ca.svg',
                text: 'Relatórios',
                callback: function(p) {
                    console.log('✅ Relatórios clicado');
                    
                    // Usando modal conforme documentação
                    p.modal({
                        title: 'Relatórios Avançados',
                        url: './relatorios.html'
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
                    console.log('✅ Notas clicado para card:', card.id);
                    
                    // Modal para notas do card
                    p.modal({
                        title: 'Notas do Card',
                        url: './notas.html?cardId=' + card.id
                    });
                }
            },
            {
                icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/23f1.svg',
                text: 'Cronômetro',
                callback: function(p) {
                    console.log('✅ Cronômetro clicado para card:', card.id);
                    
                    p.showMessage({
                        type: 'info',
                        text: '⏱️ Cronômetro iniciado para: ' + card.title
                    });
                }
            }
        ];
    }
};

// Exposição robusta do PipefyApp
function exposePipefyApp() {
    try {
        // Exposição global principal
        window.PipefyApp = PipefyApp;
        
        // Verificação e logs
        if (window.PipefyApp) {
            console.log('✅ PipefyApp exposto com sucesso');
            console.log('🔍 Funções disponíveis:', Object.keys(PipefyApp));
            
            // Verificar se as funções estão corretas
            if (typeof PipefyApp['pipe-buttons'] === 'function') {
                console.log('✅ pipe-buttons definido corretamente');
            }
            
            if (typeof PipefyApp['card-buttons'] === 'function') {
                console.log('✅ card-buttons definido corretamente');
            }
            
            // Update UI status
            const statusEl = document.getElementById('status');
            if (statusEl) {
                statusEl.innerHTML = '✅ SDK carregada seguindo documentação oficial!';
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

// Múltiplas formas de inicialização
document.addEventListener('DOMContentLoaded', exposePipefyApp);

// Fallback para estados já carregados
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', exposePipefyApp);
} else {
    exposePipefyApp();
}

// Fallback adicional com delay
setTimeout(exposePipefyApp, 100);

console.log('📋 SDK Test Pipefy carregado - seguindo documentação oficial');