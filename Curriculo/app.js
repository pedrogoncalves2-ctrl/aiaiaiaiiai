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
        <div class="campo">
            <label for="experiencia_${indice}">Trabalho</label>
            <textarea id="experiencia_${indice}" name="experiencia[]"></textarea>
        </div>
        <div class="campo">
            <span class="rotulo">Status</span>
            <div class="opcoes">
                <label class="opcao"><input type="radio" name="status_experiencia[${indice}]" value="atual"> Trabalho atual</label>
                <label class="opcao"><input type="radio" name="status_experiencia[${indice}]" value="anterior"> Trabalho anterior</label>
            </div>
        </div>
        <div class="linha">
            <div class="campo">
                <label for="ano_inicio_${indice}">Ano de início</label>
                <input type="number" id="ano_inicio_${indice}" name="ano_inicio[]" placeholder="Ex: 2020">
            </div>
            <div class="campo">
                <label for="ano_fim_${indice}">Ano de fim</label>
                <input type="number" id="ano_fim_${indice}" name="ano_fim[]" placeholder="Ex: 2023">
            </div>
        </div>
    `;

    experienciasContainer.appendChild(novaExperiencia);
    if (indice + 1 >= maximoExperiencias) {
        adicionarExperiencia.disabled = true;
    }
});

const formulario = document.querySelector('form');

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

    for (const campo of camposObrigatorios) {
        const elemento = document.getElementById(campo.id);
        if (elemento && elemento.value.trim() === '') {
            erros.push(`${campo.rotulo} é obrigatório.`);
        }
    }

    const emailElemento = document.getElementById('email');
    if (emailElemento) {
        const email = emailElemento.value.trim();
        if (email !== '' && (!email.includes('@') || !email.includes('.'))) {
            erros.push('E-mail inválido.');
        }
    }

    if (erros.length > 0) {
        event.preventDefault();
        alert('Corrija os campos abaixo:\n\n- ' + erros.join('\n- '));
    }
});