
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
console.log("Edad en Dias: " + edadEnDias);

const PI = 3.14159265359;
let radio = 3;
let area = PI * radio ** 2;
console.log( "Area: " + area );

//Ejercicio 3:

/* 3. **Operaciones de comparación**
    - Declara dos variables numéricas (**`num1`** y **`num2`**) y asígnales valores. Luego, utiliza los operadores de comparación para determinar si **`num1`** es mayor que **`num2`**, si **`num1`** es menor o igual a **`num2`**, y si **`num1`** es igual a **`num2`**.
    - Declara una variable numérica (**`edad`**) y otra variable numérica (**`edadMaxima`**) y asígnales valores. Luego, utiliza los operadores de comparación para determinar si **`edad`** es mayor que **`edadMaxima`** y almacena el resultado en una variable booleana llamada **`esMayor`**. */

console.log("Ejercicio 3: \n");

num1 = prompt("Ejercicio 3:\nIngresar Numero 1: ");
num2 = prompt("Ejercicio 3:\nIngresar Numero 2: ");

console.log( 
    "Num1 es Mayor a num2?: " + (num1>num2),
    "\nNum1 es Menor o igual a num2?: " + (num1<=num2),
    "\nNum1 es igual a num2?: " + (num1 === num2)
);

edad = 17;
const edadMaxima = 18;
let esMayor = edad >= edadMaxima;
console.log("Edad: " + edad);
console.log("Es Mayor de Edad?: " + esMayor);

//EJercicio 4:

/* 4. **Operaciones lógicas**
    - Declara dos variables booleanas (**`cond1`** y **`cond2`**) y asígnales valores. Luego, utiliza los operadores lógicos para determinar si ambas condiciones son verdaderas, si al menos una de las condiciones es verdadera, y si ninguna de las condiciones es verdadera.
    - Declara una variable numérica (**`edad`**) y una variable booleana (**`esMayorDeEdad`**) y asígnales valores. Luego, utiliza los operadores lógicos para determinar si la persona es mayor de edad (es decir, si **`edad`** es mayor o igual a 18) y almacena el resultado en **`esMayorDeEdad`**. */

console.log("Ejercicio 4: \n");

let cond1 = true;
let cond2 = false;

console.log(
    "Condicional 1 = " + cond1,
    "\nCondicional 2 = " + cond2,
    "\nAmbas Condiciones son verdaderas?: " + (cond1 && cond2),     // AND
    "\nAl menos una condicion es verdadera?: " + (cond1 || cond2),  // OR
    "\nAmbas Condiciones son Falsas:?: " + !(cond1 || cond2)        // NOR
);

edad = 17; // Variable declarada en Ejercicio 1
let esMayorDeEdad = edad >= 18;
console.log("Edad = " + edad + "\nEs Mayor de edad?: " + esMayorDeEdad);