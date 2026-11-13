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
            novoCampo.required = true;
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
                <textarea name="experiencia[]" required></textarea><br>
                <input type="radio" name="status_experiencia[${indice}]" value="atual">
                <label>Trabalho Atual</label><br>
                <input type="radio" name="status_experiencia[${indice}]" value="anterior">
                <label>Trabalho Anterior</label><br>
                <label>Ano de Início:</label><br>
                <input type="number" name="ano_inicio[]" required><br>
                <label>Ano de Fim:</label><br>
                <input type="number" name="ano_fim[]"><br><br>
            `;

            experienciasContainer.appendChild(novaExperiencia);
            if (indice + 1 >= maximoExperiencias) {
                adicionarExperiencia.disabled = true;
            }
        });