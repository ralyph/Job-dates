
function generarFechas() {
    const numCitas = document.getElementById('num-citas').value;
    const fechasDiv = document.getElementById('fechas');
    fechasDiv.innerHTML = '';

    for (let i = 0; i < numCitas; i++) {
        const labelFecha = document.createElement('label');
        labelFecha.textContent = `Date for Appointment ${i + 1}: `;
        const inputFecha = document.createElement('input');
        inputFecha.type = 'date';
        inputFecha.name = `fecha-${i + 1}`;

        const labelHoraInicio = document.createElement('label');
        labelHoraInicio.textContent = `Initial Time for Date ${i + 1}: `;
        const inputHoraInicio = document.createElement('input');
        inputHoraInicio.type = 'time';
        inputHoraInicio.name = `hora-inicio-${i + 1}`;

        const labelHoraFin = document.createElement('label');
        labelHoraFin.textContent = `Ending Time for Date ${i + 1}: `;
        const inputHoraFin = document.createElement('input');
        inputHoraFin.type = 'time';
        inputHoraFin.name = `hora-fin-${i + 1}`;

        fechasDiv.appendChild(labelFecha);
        fechasDiv.appendChild(inputFecha);
        fechasDiv.appendChild(document.createElement('br'));

        fechasDiv.appendChild(labelHoraInicio);
        fechasDiv.appendChild(inputHoraInicio);
        fechasDiv.appendChild(document.createElement('br'));

        fechasDiv.appendChild(labelHoraFin);
        fechasDiv.appendChild(inputHoraFin);
        fechasDiv.appendChild(document.createElement('br'));
    }
}

function mostrarValores() {
    const numCitas = document.getElementById('num-citas').value;
    let texto = 'Dear Hiring Manager, I am available for an interview and suggest the following times:\n\n';

    for (let i = 0; i < numCitas; i++) {
        const fechaInput = document.getElementsByName(`fecha-${i + 1}`)[0];
        const fecha = new Date(fechaInput.value);
        const nombreDia = obtenerNombreDia(fecha.getDay());
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
        const ano = fecha.getFullYear();
        const horaInicio = document.getElementsByName(`hora-inicio-${i + 1}`)[0].value;
        const horaFin = document.getElementsByName(`hora-fin-${i + 1}`)[0].value;
        texto += `${nombreDia}, ${dia}-${mes}-${ano}, I am free from ${horaInicio}, to ${horaFin}\n`;
    }

    texto += "\nThank You.";

    const resultado = document.getElementById('resultado');
    resultado.textContent = texto;
}

function obtenerNombreDia(dia) {
    const dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dias[dia];
}