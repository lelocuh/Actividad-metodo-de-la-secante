
const TOLERANCIA = 0.05; // Error porcentual: 0,05 %
const MAX_ITERACIONES = 100;

// Método de la secante
function secante(nombre, f, x0, x1) {
    console.log(`\n=====================================`);
    console.log(nombre);
    console.log(`x0 = ${x0}, x1 = ${x1}`);
    console.log(`=====================================`);

    const tabla = [];

    // Registrar las aproximaciones iniciales
    tabla.push({
        iteracion: 0,
        x: x0,
        fx: f(x0),
        error: null
    });

    tabla.push({
        iteracion: 1,
        x: x1,
        fx: f(x1),
        error: null
    });

    let anterior = x0;
    let actual = x1;
    let convergio = false;

    for (let i = 2; i <= MAX_ITERACIONES + 1; i++) {
        const fAnterior = f(anterior);
        const fActual = f(actual);
        const denominador = fActual - fAnterior;

        // Evitar división entre cero o por un valor muy pequeño
        if (
            !Number.isFinite(denominador) ||
            Math.abs(denominador) < 1e-14
        ) {
            console.log(
                "El método se detuvo: denominador demasiado pequeño."
            );
            break;
        }

        // Fórmula del método de la secante
        const nuevo =
            actual -
            (fActual * (actual - anterior)) / denominador;

        if (!Number.isFinite(nuevo) || !Number.isFinite(f(nuevo))) {
            console.log(
                "El método se detuvo: se obtuvo un valor no válido."
            );
            break;
        }

        // Error relativo porcentual aproximado
        const error =
            Math.abs((nuevo - actual) / nuevo) * 100;

        tabla.push({
            iteracion: i,
            x: nuevo,
            fx: f(nuevo),
            error: error
        });

        // Comprobar el criterio de parada
        if (error < TOLERANCIA) {
            convergio = true;
            break;
        }

        // Preparar la siguiente iteración
        anterior = actual;
        actual = nuevo;
    }

    // Mostrar la tabla de resultados
    console.table(
        tabla.map(fila => ({
            Iteracion: fila.iteracion,
            "x aproximado": fila.x.toFixed(9),
            "f(x)": fila.fx.toExponential(6),
            "Error (%)":
                fila.error === null
                    ? "---"
                    : fila.error.toFixed(6)
        }))
    );

    const ultima = tabla[tabla.length - 1];

    if (convergio) {
        console.log("Estado: CONVERGENCIA ALCANZADA");
        console.log(`Raíz aproximada: ${ultima.x}`);
        console.log(`Error final: ${ultima.error.toFixed(6)} %`);
    } else {
        console.log("Estado: NO SE ALCANZÓ LA TOLERANCIA");
        console.log(`Última aproximación: ${ultima.x}`);
        console.log(
            "Revise la existencia de raíces y los puntos iniciales."
        );
    }

    return { tabla, convergio };
}

// EJERCICIO 1: ln(x) - 2x + 3 = 0
secante(
    "Ejercicio 1: ln(x) - 2x + 3 = 0",
    x => Math.log(x) - 2 * x + 3,
    1,
    2
);

// EJERCICIO 2: x^3 - 3x - 4 = 0
secante(
    "Ejercicio 2: x^3 - 3x - 4 = 0",
    x => x ** 3 - 3 * x - 4,
    5,
    7
);

// EJERCICIO 3: x^2 - x + 6 = 0
const discriminante = (-1) ** 2 - 4 * 1 * 6;

if (discriminante < 0) {
    console.log(
        "\nEjercicio 3: x^2 - x + 6 = 0"
    );
    console.log(
        `Discriminante = ${discriminante}`
    );
    console.log(
        "La ecuación no tiene raíces reales."
    );
    console.log(
        "Se ejecutará la secante para observar su comportamiento."
    );
}

secante(
    "Ejercicio 3: x^2 - x + 6 = 0",
    x => x ** 2 - x + 6,
    1,
    2
);

// EJERCICIO 4: 2 sen(x) - x = 0
// Math.sin trabaja en radianes.
secante(
    "Ejercicio 4: 2 sin(x) - x = 0",
    x => 2 * Math.sin(x) - x,
    1,
    2
);
