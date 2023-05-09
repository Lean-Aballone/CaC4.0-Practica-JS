
//Ejercicio 1:
/*1. **Declaración de variables**
    - Declara una variable llamada **`nombre`** y asígnale un valor de tipo string.
    - Declara una variable llamada **`edad`** y asígnale un valor de tipo number.
    - Declara una variable llamada **`esEstudiante`** y asígnale un valor de tipo boolean.
*/

console.log("Ejercicio 1: \n");
let nombre = "Nombre1";
let edad = 23;
let esEstudiante = true;

console.log(nombre, edad, esEstudiante);


//Ejercicio 2:

/* 2. **Operaciones aritméticas**
    - Declara dos variables numéricas (**`num1`** y **`num2`**) y asígnales valores. Luego, realiza una suma, una resta, una multiplicación y una división con ellos, y almacena los resultados en otras variables.
    - Declara una variable numérica (**`edad`**) y otra variable numérica (**`edadEnDias`**) y asígnales valores. Luego, realiza una operación que convierta la edad a días y almacena el resultado en **`edadEnDias`**.
    - Declara una variable numérica (**`radio`**) y otra variable numérica (**`area`**) y asígnales valores. Luego, realiza una operación que calcule el área de un círculo con el radio dado y almacena el resultado en **`area`**. */

    console.log("Ejercicio 2: \n");
    let num1, num2;
    num1 = 10;
    num2 = 5;
    
    console.log( 
        "Suma: " + (num1 + num2),
        "\nResta: " + (num1 - num2),
        "\nMultiplicacion: " + (num1 * num2),
        "\nDivisión: " + (num1 / num2)
    );
    
    edad = 4;   //Variable declarada en Ejercicio 1
    const daysInYears =  365.25;
    let edadEnDias = edad * daysInYears;
    console.log (edadEnDias);
    
    const PI = 3.14159265359;
    let radio = 3;
    let area = PI * radio ** 2;
    console.log( "\n Area: " + area );
    
