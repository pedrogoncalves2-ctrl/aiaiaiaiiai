const adicionarHabilidades = document.getElementById('adicionar_habilidades');
        const habilidadesContainer = document.getElementById('habilidades_container');
        const adicionarExperiencia = document.getElementById('adicionar_experiencia');
        const experienciasContainer = document.getElementById('experiencias_container');

        adicionarHabilidades.addEventListener('click', function() {
            const novoCampo = document.createElement('textarea');
            novoCampo.name = 'habilidades[]';
            novoCampo.required = true;
            novoCampo.placeholder = 'Descreva outra habilidade';
            habilidadesContainer.appendChild(novoCampo);
        });

        adicionarExperiencia.addEventListener('click', function() {
            const indice = experienciasContainer.children.length;
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
        });