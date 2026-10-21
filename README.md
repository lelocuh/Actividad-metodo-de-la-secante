
# 📐 Método de la Secante
### Taller de Métodos Numéricos — Corte 3

<p align="center">
  <strong>Implementación en JavaScript</strong><br>
  Tolerancia de error: <code>0.05%</code>
</p>

---

## 👥 Integrantes

- **Samuel Ivan Heredia Moya**
- **Diego Alejandro Correa**
- **Jerson Camilo Florez**

---

## 📌 Descripción del proyecto

Este proyecto implementa el **método de la secante** en JavaScript para aproximar las raíces de ecuaciones no lineales. El programa utiliza dos valores iniciales, calcula nuevas aproximaciones de manera iterativa y presenta una tabla con los resultados de cada iteración.

El criterio de parada establecido para el taller es que el **error relativo porcentual aproximado sea menor que `0.05%`**. También se establece un límite máximo de iteraciones para evitar que el programa continúe indefinidamente.

## 🎯 Objetivos

- Aplicar el método de la secante a diferentes ecuaciones.
- Calcular aproximaciones sucesivas de una raíz.
- Evaluar el error relativo porcentual aproximado en cada iteración.
- Identificar casos en los que el método converge y casos en los que no se encuentra una raíz real.
- Comparar el comportamiento del método con otros métodos numéricos, como el método de bisección.

## 🧮 Fundamento matemático

El método de la secante se define mediante la siguiente fórmula:

\[
x_{n+1}=x_n-\frac{f(x_n)(x_n-x_{n-1})}{f(x_n)-f(x_{n-1})}
\]

Donde:

- \(x_{n-1}\): aproximación anterior.
- \(x_n\): aproximación actual.
- \(x_{n+1}\): nueva aproximación.
- \(f(x)\): función cuya raíz se desea aproximar.

El error relativo porcentual aproximado se calcula mediante:

\[
E_a=\left|\frac{x_{n+1}-x_n}{x_{n+1}}\right|\times100
\]

El algoritmo se detiene cuando:

\[
E_a < 0.05\%
\]

> **Importante:** un error pequeño entre aproximaciones consecutivas no garantiza por sí solo que se haya encontrado una raíz. También es necesario revisar el valor de la función y el comportamiento del método.

## 🧪 Ejercicios incluidos

El programa aplica el método de la secante a las siguientes ecuaciones:

| Ejercicio | Función | Valores iniciales |
|---|---|---|
| 1 | \(f(x)=\ln(x)-2x+3\) | \(x_0=1,\ x_1=2\) |
| 2 | \(f(x)=x^3-3x-4\) | \(x_0=5,\ x_1=7\) |
| 3 | \(f(x)=x^2-x+6\) | \(x_0=1,\ x_1=2\) |
| 4 | \(f(x)=2\sin(x)-x\) | \(x_0=1,\ x_1=2\) |

En JavaScript, `Math.log(x)` representa el logaritmo natural y `Math.sin(x)` calcula el seno en **radianes**.

### Observación sobre el ejercicio 3

La ecuación \(x^2-x+6=0\) no tiene raíces reales, porque su discriminante es negativo:

\[
\Delta=b^2-4ac=1-24=-23
\]

Por esta razón, no se espera que el método converja a una raíz real en este ejercicio. Se incluye para observar y analizar el comportamiento del método cuando no existe una solución real.

## ⚙️ Requisitos

- [Node.js](https://nodejs.org/) instalado o un navegador moderno con consola de JavaScript.
- El archivo `secante.js` con el código fuente del proyecto.
- No se requieren bibliotecas externas.

## ▶️ Cómo ejecutar el programa

### Opción 1: utilizando Node.js

1. Clona o descarga este repositorio.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el siguiente comando:

```bash
node secante.js
```

4. Revisa los resultados en la terminal. Se mostrarán las tablas de iteraciones y el estado final de cada ejercicio.

### Opción 2: desde el navegador

1. Abre la consola de desarrollador del navegador.
2. Copia el contenido de `secante.js`.
3. Pégalo en la consola y ejecútalo.

## 📊 Resultados del programa

Para cada ejercicio, el programa muestra:

- Número de iteración.
- Aproximación de la raíz.
- Valor de la función \(f(x)\).
- Error relativo porcentual aproximado.
- Estado final del proceso.

Cuando se alcanza la tolerancia, el programa informa que se cumplió el criterio de error establecido. Si no se alcanza, indica que la tolerancia no fue satisfecha.

Los resultados se presentan con varios decimales para facilitar el análisis numérico.

## 🧠 Conclusiones

El método de la secante permite aproximar raíces de ecuaciones no lineales sin calcular explícitamente la derivada de la función. Su desempeño depende de la función analizada y de los valores iniciales seleccionados.

El criterio de error porcentual menor que `0.05%` permite establecer una condición de parada medible. Sin embargo, no todas las funciones tienen raíces reales y no todos los conjuntos de valores iniciales garantizan convergencia.

La comparación con el método de bisección permite comprender las diferencias entre ambos procedimientos. La secante puede converger rápidamente, mientras que la bisección garantiza la convergencia cuando se utiliza una función continua en un intervalo cuyos extremos presentan signos opuestos.

## 📁 Estructura del repositorio

```text
metodo-de-la-secante/
├── README.md
└── secante.js
```

Si se desea, se puede agregar una carpeta `evidencias/` con capturas de las tablas generadas por el programa.

## 👨‍💻 Autores

Trabajo desarrollado por **Samuel Ivan Heredia Moya**, **Diego Alejandro Correa** y **Jerson Camilo Florez** para la asignatura de **Métodos Numéricos — Corte 3**.

---

<p align="center">
  Hecho para aprender, calcular y analizar métodos numéricos.
</p>
