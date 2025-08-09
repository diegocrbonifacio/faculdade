document.addEventListener('DOMContentLoaded', () => {
    // Alternância entre abas de login e cadastro
    const abaLogin = document.getElementById('aba-login');
    const abaCadastro = document.getElementById('aba-cadastro');
    const formLogin = document.getElementById('form-login');
    const formCadastro = document.getElementById('form-cadastro');

    function ativarAba(abaAtiva, formMostrar, formOcultar) {
        abaLogin.classList.remove('ativo');
        abaCadastro.classList.remove('ativo');
        formLogin.classList.remove('ativo-formulario');
        formCadastro.classList.remove('ativo-formulario');

        abaAtiva.classList.add('ativo');
        formMostrar.classList.add('ativo-formulario');
        formOcultar.classList.remove('ativo-formulario');
    }

    abaLogin.addEventListener('click', () => {
        ativarAba(abaLogin, formLogin, formCadastro);
    });

    abaCadastro.addEventListener('click', () => {
        ativarAba(abaCadastro, formCadastro, formLogin);
    });

    // Alternância de tema claro/escuro
    const botaoTema = document.getElementById('botao-tema');
    const iconeTema = document.getElementById('icone-tema');
    const corpo = document.body;

    function definirTema(tema) {
        if (tema === 'dark') {
            corpo.classList.add('dark-theme');
            iconeTema.innerHTML = '&#x1F319;'; // Lua
            localStorage.setItem('tema', 'dark');
        } else {
            corpo.classList.remove('dark-theme');
            iconeTema.innerHTML = '&#x2600;&#xFE0F;'; // Sol
            localStorage.setItem('tema', 'light');
        }
    }

    // Carrega tema salvo ou usa padrão claro
    const temaSalvo = localStorage.getItem('tema');
    definirTema(temaSalvo || 'light');

    // Alterna tema ao clicar no botão
    botaoTema.addEventListener('click', () => {
        if (corpo.classList.contains('dark-theme')) {
            definirTema('light');
        } else {
            definirTema('dark');
        }
    });
});
