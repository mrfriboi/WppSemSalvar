function meuEscopo(){
    const form = document.querySelector('.form'); // seleciona o formulário
    
    function recebeEventoForm(event){
        event.preventDefault();
        let pais = form.querySelector('.ddd-pais').value; // seleciona o campo lado1
        let estado = form.querySelector('.ddd-estado').value; // seleciona o campo lado2
        let telefone = form.querySelector('.numero-telefone').value; // seleciona o campo lado3
        let mensagem = form.querySelector('.mensagem').value;

        let telefone_formatado = telefone.replace(/\D/g, ''); // remove os caracteres não numéricos
        let pais_formatado = pais.replace(/\D/g, ''); // remove os caracteres não numéricos
        let estado_formatado = estado.replace(/\D/g, ''); // remove os caracteres não numéricos

        let telefone_completo = `(${pais_formatado}) ${estado_formatado} ${telefone_formatado}`; // formata o telefone

        // abrir link no navegador
        window.open(`https://api.whatsapp.com/send?phone=${telefone_completo}&text=${mensagem}`);
      
    }

    form.addEventListener('submit', recebeEventoForm); // quando o form for submetido, chama a função recebeEventoForm

}

meuEscopo(); // chama a função meuEscopo()