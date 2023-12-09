function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
    //trabajos es un array con los trabajos de la persona
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    //recorro el array trabajos y retorno cada salario
    //ese salario, lo voy metiendo en un array de salarios
    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });
    //calculo la mediana de ese array de salarios y lo guardo
    //en una variable
    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;
    return nuevoSalario;
}

const empresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}


function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if (!empresas[nombre][year]) {
        console.warn('No dio salarios ese año');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}


function proyeccionPorEmpresa() {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });
        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }
        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimoMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimoMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimoMediana + aumento;
        return nuevaMediana;
    }
}


function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    
    const mediana = PlatziMath.calcularMediana(listaMedianas);
    return mediana;
}


function medianaTop10() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length-cantidad;
    const top10 = medianasOrdenadas.splice(limite, medianasOrdenadas.length);

    const medianTop10 = PlatziMath.calcularMediana(top10);
    return medianTop10;
}





