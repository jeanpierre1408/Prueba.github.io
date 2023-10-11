const estudiantes = {
    'Jean': {
        numeroEstudiante: '002',
        notas: {
            'Matemáticas': 18,
            'Ciencias': 16,
            'Historia': 20
        }
    },

    'Juan': {
        numeroEstudiante: '001',
        notas: {
            'Matemáticas': 18,
            'Ciencias': 16,
            'Historia': 20
        }
    },

    'Steven': {
        numeroEstudiante: '001',
        notas: {
            'Matemáticas': 15,
            'Ciencias': 14,
            'Historia': 18
        }
    }
};

function mostrarNotas() {
    const nombre = document.getElementById('nombre').value;
    const numeroEstudiante = document.getElementById('numeroEstudiante').value;
    const tablaNotas = document.getElementById('tablaNotas');

    // Verificar si el estudiante existe
    if (estudiantes[nombre] && estudiantes[nombre].numeroEstudiante === numeroEstudiante) {
        const notas = estudiantes[nombre].notas;

        // Limpiar la tabla de notas
        tablaNotas.innerHTML = '';

        // Crear la estructura de la tabla
        const tabla = document.createElement('table');
        tabla.innerHTML = `
            <tr>
                <th>Materia</th>
                <th>Nota</th>
            </tr>
        `;

        // Rellenar la tabla con las notas
        for (const materia in notas) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${materia}</td>
                <td>${notas[materia]}</td>
            `;
            tabla.appendChild(fila);
        }

        tablaNotas.appendChild(tabla);
    } else {
        // Limpiar la tabla de notas si no se encuentra el estudiante
        tablaNotas.innerHTML = '';
        alert('No se encontraron notas para el estudiante proporcionado.');
    }
}
    
