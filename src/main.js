import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

const geraCpf = document.querySelector('.btn-gera-cpf');

geraCpf.addEventListener('click', function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
});