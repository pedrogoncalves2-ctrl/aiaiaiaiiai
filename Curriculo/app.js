const adicionarHabilidades = document.getElementById('adicionar_habilidades');
const habilidadesContainer = document.getElementById('habilidades_container');
const adicionarExperiencia = document.getElementById('adicionar_experiencia');
const experienciasContainer = document.getElementById('experiencias_container');
const maximoExperiencias = 3;
const maximoHabilidades = 4;


        adicionarHabilidades.addEventListener('click', function() {
            const total = habilidadesContainer.querySelectorAll('textarea').length;
            if (total >= maximoHabilidades) {
                alert(`Você atingiu o limite máximo de ${maximoHabilidades} habilidades.`);
                return;
            }
            const novoCampo = document.createElement('textarea');
            novoCampo.name = 'habilidades[]';
            novoCampo.placeholder = 'Descreva outra habilidade';
            habilidadesContainer.appendChild(novoCampo);
            if (total + 1 >= maximoHabilidades) {
                adicionarHabilidades.disabled = true;
            }
        });

        adicionarExperiencia.addEventListener('click', function() {
            const indice = experienciasContainer.querySelectorAll('.experience-item').length;
            if (indice >= maximoExperiencias) {
                alert(`Você atingiu o limite máximo de ${maximoExperiencias} experiências.`);
                return;
            }

            const novaExperiencia = document.createElement('div');

            novaExperiencia.className = 'experience-item';
            novaExperiencia.innerHTML = `
                <label>Trabalho:</label><br>
                <textarea name="experiencia[]"></textarea><br>
                <input type="radio" name="status_experiencia[${indice}]" value="atual">
                <label>Trabalho Atual</label><br>
                <input type="radio" name="status_experiencia[${indice}]" value="anterior">
                <label>Trabalho Anterior</label><br>
                <label>Ano de Início:</label><br>
                <input type="number" name="ano_inicio[]"><br>
                <label>Ano de Fim:</label><br>
                <input type="number" name="ano_fim[]"><br><br>
            `;

            experienciasContainer.appendChild(novaExperiencia);
            if (indice + 1 >= maximoExperiencias) {
                adicionarExperiencia.disabled = true;
            }
        });

// ===== Validação dos dados pessoais =====
const formulario = document.querySelector('form');

// Array com os campos obrigatórios (usa o id do HTML e o nome que aparece na mensagem)
const camposObrigatorios = [
    { id: 'nome', rotulo: 'Nome completo' },
    { id: 'cidade', rotulo: 'Cidade' },
    { id: 'telefone', rotulo: 'Telefone' },
    { id: 'email', rotulo: 'E-mail' },
    { id: 'nascimento', rotulo: 'Data de nascimento' },
    { id: 'nacionalidade', rotulo: 'Nacionalidade' }
];

formulario.addEventListener('submit', function(event) {
    const erros = [];

    // 1) Campo vazio (trim() ignora espaços: "   " conta como vazio)
    for (const campo of camposObrigatorios) {
        const valor = document.getElementById(campo.id).value.trim();
        if (valor === '') {
            erros.push(`${campo.rotulo} é obrigatório.`);
        }
    }

    // 2) E-mail preenchido, mas com formato errado (o navegador não checa mais por causa do novalidate)
    const email = document.getElementById('email').value.trim();
    if (email !== '' && (!email.includes('@') || !email.includes('.'))) {
        erros.push('E-mail inválido.');
    }

    // 3) Se houver erro, impede o envio e mostra tudo de uma vez
    if (erros.length > 0) {
        event.preventDefault();
        alert('Corrija os campos abaixo:\n\n- ' + erros.join('\n- '));
    }
});