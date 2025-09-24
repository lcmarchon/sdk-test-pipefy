// Pipefy SDK Implementation
(function() {
    'use strict';

    // Configuração principal do aplicativo
    const PipefyApp = {
        // Implementação da funcionalidade pipe-buttons
        'pipe-buttons': function(p, pipe) {
            return [
                {
                    icon: './assets/dashboard-icon.svg',
                    text: 'Dashboard',
                    callback: function(p) {
                        p.dropdown({
                            title: 'Dashboard Options',
                            items: [
                                {
                                    title: 'Ver Métricas Gerais',
                                    callback: function(p) {
                                        p.sidebar({ 
                                            title: 'Métricas do Projeto',
                                            url: './pages/metrics.html'
                                        });
                                        p.closeDropdown();
                                    }
                                },
                                {
                                    title: 'Relatório de Performance',
                                    callback: function(p) {
                                        p.modal({
                                            title: 'Relatório de Performance',
                                            url: './pages/performance.html',
                                            width: '800px',
                                            height: '600px'
                                        });
                                        p.closeDropdown();
                                    }
                                },
                                {
                                    title: 'Exportar Dados',
                                    callback: function(p) {
                                        exportData(p, pipe);
                                        p.closeDropdown();
                                    }
                                }
                            ]
                        });
                    }
                },
                {
                    icon: './assets/timer-icon.svg',
                    text: 'Tempo',
                    callback: function(p) {
                        p.dropdown({
                            title: 'Controle de Tempo',
                            items: [
                                {
                                    title: 'Iniciar Timer',
                                    callback: function(p) {
                                        startTimer(p, pipe);
                                        p.closeDropdown();
                                    }
                                },
                                {
                                    title: 'Relatório de Horas',
                                    callback: function(p) {
                                        p.sidebar({
                                            title: 'Relatório de Horas',
                                            url: './pages/time-report.html'
                                        });
                                        p.closeDropdown();
                                    }
                                },
                                {
                                    title: 'Configurar Lembretes',
                                    callback: function(p) {
                                        p.modal({
                                            title: 'Configurar Lembretes',
                                            url: './pages/reminders.html',
                                            width: '500px',
                                            height: '400px'
                                        });
                                        p.closeDropdown();
                                    }
                                }
                            ]
                        });
                    }
                },
                {
                    icon: './assets/report-icon.svg',
                    text: 'Relatórios',
                    callback: function(p) {
                        p.sidebar({
                            title: 'Relatórios Avançados',
                            url: './pages/reports.html'
                        });
                    }
                },
                {
                    icon: './assets/settings-icon.svg',
                    text: 'Configurações',
                    callback: function(p) {
                        p.modal({
                            title: 'Configurações do Projeto',
                            url: './pages/settings.html',
                            width: '600px',
                            height: '500px'
                        });
                    }
                },
                {
                    icon: './assets/help-icon.svg',
                    text: 'Ajuda',
                    url: 'https://docs.taskmangerpro.com/help',
                    target: '_blank'
                }
            ];
        },

        // Implementação de botões nos cards
        'card-buttons': function(p, card) {
            return [
                {
                    icon: './assets/clock-icon.svg',
                    text: 'Cronômetro',
                    callback: function(p) {
                        startCardTimer(p, card);
                    }
                },
                {
                    icon: './assets/note-icon.svg',
                    text: 'Notas',
                    callback: function(p) {
                        p.modal({
                            title: 'Notas do Card',
                            url: './pages/card-notes.html?cardId=' + card.id,
                            width: '500px',
                            height: '400px'
                        });
                    }
                }
            ];
        }
    };

    // Funções auxiliares
    function exportData(p, pipe) {
        // Simula exportação de dados
        p.showMessage({
            type: 'success',
            text: `Dados do pipe "${pipe.name}" exportados com sucesso!`,
            timeout: 3000
        });
        
        // Aqui você implementaria a lógica real de exportação
        console.log('Exportando dados do pipe:', pipe);
    }

    function startTimer(p, pipe) {
        // Simula início do timer
        p.showMessage({
            type: 'info',
            text: 'Timer iniciado para o projeto!',
            timeout: 2000
        });
        
        // Aqui você implementaria a lógica real do timer
        console.log('Timer iniciado para o pipe:', pipe);
    }

    function startCardTimer(p, card) {
        // Simula início do timer para um card específico
        p.showMessage({
            type: 'info',
            text: `Timer iniciado para o card "${card.title}"`,
            timeout: 2000
        });
        
        console.log('Timer iniciado para o card:', card);
    }

    // Inicialização quando o documento estiver pronto
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Task Manager Pro - Aplicativo carregado');
        
        // Animação de entrada
        const appElement = document.getElementById('app');
        if (appElement) {
            appElement.style.opacity = '0';
            appElement.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                appElement.style.transition = 'all 0.3s ease';
                appElement.style.opacity = '1';
                appElement.style.transform = 'translateY(0)';
            }, 100);
        }
    });

    // Expor o objeto PipefyApp globalmente
    window.PipefyApp = PipefyApp;

})();