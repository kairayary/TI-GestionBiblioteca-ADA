
const prompt = require("prompt-sync")({ sigint: true });

//1. ESTRUCTURA DE DATOS

/** a) Crear un array de objetos llamado libros que contenga al menos 10
libros. Cada libro debe tener las siguientes propiedades:
✓ id (número)
✓ título (string),
✓ autor (string),
✓ año (número),
✓ género (string),
✓ disponible (booleano).*/

let libros = [
    { id: 1, titulo: 'Como hacer que te pasen cosas buenas', autor: ' Mariam Roja Estape ', anio: 2018, genero: 'Desarrollo Personal', disponible: true },
    { id: 2, titulo: "¡El poder del ahora!", autor: "Eckhart Tolle", anio: 1997, genero: "Autoayuda", disponible: true },
    { id: 3, titulo: "Los secretos de la mente millonaria: ¡Descubre la riqueza!", autor: " T. Harv Eker ", anio: 2005, genero: "Finanzas Personales", disponible: true },
    { id: 4, titulo: "Sapiens: De animales a dioses - Una breve historia de la humanidad", autor: "Yuval Noah Harari", anio: 2011, genero: "Historia", disponible: true },
    { id: 5, titulo: "El hombre en busca de sentido - La historia de Viktor Frankl", autor: " Viktor Frankl ", anio: 1946, genero: "Psicología", disponible: true },
    { id: 6, titulo: "Piense y hágase rico: La clave del éxito", autor: "Napoleon Hill", anio: 1937, genero: "Autoayuda", disponible: true },
    { id: 7, titulo: "La sombra del viento: Un misterio literario", autor: "Carlos Ruiz Zafón", anio: 2001, genero: "Ficción", disponible: true },
    { id: 8, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967, genero: "Realismo Mágico", disponible: true },
    { id: 9, titulo: "El alquimista: Una fábula para seguir tus sueños", autor: "Paulo Coelho", anio: 1988, genero: "Ficción", disponible: true },
    { id: 10, titulo: '1984', autor: 'George Orwell', anio: 1949, genero: 'Ficción', disponible: true }
]
// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
// Cada usuario debe tener:
// ✓ id (número)
// ✓ nombre (string)
// ✓ email (string)
// ✓ librosPrestados (array de ids de libros).

let usuarios = [
    { id: 1, nombre: 'Pedro', email: 'PEDRO@gmail.com', librosPrestados: [] },
    { id: 2, nombre: 'Mateo', email: 'mateo@gmail.com', librosPrestados: [] },
    { id: 3, nombre: 'Diana', email: 'diana@gmail.com', librosPrestados: [] },
    { id: 4, nombre: 'Lucas', email: 'LUCAS@gmail.com', librosPrestados: [] },
    { id: 5, nombre: 'Laura', email: 'LAURA@gmail.com', librosPrestados: [] }
];

//2.FUNCIONES DE GESTIÓN DE LIBROS
/**a) Implementar una función agregarLibro(id, titulo, autor, anio, genero)
que agregue un nuevo libro al array libros.
*/
function agregarLibro(titulo, autor, anio, genero) {

    let id = libros.length + 1;
    let nuevoLibro = { id, titulo, autor, anio, genero, disponible: true }
    libros.push(nuevoLibro)
    return nuevoLibro
}



/**b) Crear una función buscarLibro(criterio, valor) que permita buscar
libros por título, autor o género utilizando el algoritmo de búsqueda
lineal. */

function buscarLibro(criterio, valor) {
    let resultadoBusqueda = [];

    for (let i = 0; i < libros.length; i++) {

        let libro = libros[i];

        // Convertir a minúsculas si el valor y el criterio son cadenas
        if (typeof libro[criterio] === 'string' && typeof valor === 'string') {
            if (libro[criterio].toLowerCase() === valor.toLowerCase()) {
                resultadoBusqueda.push(libro);
            }
        } else {
            if (libro[criterio] === valor) {
                resultadoBusqueda.push(libro);
            }
        }
    }

    //para verificar si hay un resultado
    if (resultadoBusqueda.length > 0) {
        return resultadoBusqueda;
    } else {
        return `No se encontraron libros con ${criterio} igual a ${valor}.`;
    }
}



/**c) Desarrollar una función ordenarLibros(criterio) que ordene los libros
por título o año utilizando el algoritmo de ordenamiento burbuja
(bubble sort) y luego muestre los libros ordenados en la consola.
 */

function ordenarLibros(criterios) {
    for (let i = 0; i < libros.length; i++) {
        for (let j = 0; j < libros.length - 1; j++) {
            if (libros[j][criterios] > libros[j + 1][criterios]) {
                let temporal = libros[j];
                libros[j] = libros[j + 1]
                libros[j + 1] = temporal
            }

        }

    }
}



/**d) Desarrollar una función borrarLibro(id) que elimine el libro que se le
pase por parámetro. */

function borrarLibro(id) {

    //encontrar la posición del libro de acuerdo al id del parámetro
    let posicion = libros.findIndex(libro => libro.id === id);

    if (posicion !== -1) {

        //eliminar el libro
        libros.splice(posicion, 1);

        return `Libro con id ${id} ha sido eliminado. `;

    } else {
        return `Libro con id ${id} no ha sido encontrado.`;
    }
}



//3.GESTIÓN DE USUARIOS
/**
a) Implementar una función registrarUsuario(nombre, email) que
agregue un nuevo usuario al array usuarios.*/

function registrarUsuario(nombre, email) {

    let id = usuarios.length + 1;

    let nuevoUsuario = { id, nombre, email, librosPrestados: [] };
    usuarios.push(nuevoUsuario)
    return nuevoUsuario;
}



/**b) Implementar una función mostrarTodosLosUsuarios() que me
devuelva el array completo de usuarios */

function mostrarTodosLosUsuarios() {
    return usuarios;
}



/**c) Crear una función buscarUsuario(email) que devuelva la información
de un usuario dado su email. */

function buscarUsuario(email) {
    let busquedaUsuario = usuarios.filter(usuario => usuario.email === email);

    if (busquedaUsuario.length > 0) {
        return busquedaUsuario;

    } else {
        return `No se encontró usuario con email igual a ${email}.`
    }

}



/**d) Implementar una función borrarUsuario(nombre, email) que elimine el
usuario seleccionado. */

function borrarUsuario(nombre, email) {
    let indice = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email);

    if (indice !== -1) {

        //elimina el usuario
        usuarios.splice(indice, 1);

        return `El usuario con nombre ${nombre} y email ${email} ha sido eliminado.`;

    } else {
        return `El usuario con nombre ${nombre} y email ${email} no ha sido encontrado.`;
    }
}



//4. SISTEMA DE PRÉSTAMOS
/**a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
un libro como no disponible y lo agregue a la lista de libros prestados
del usuario.*/

let librosPrestados = [];

function prestarLibro(idLibro, idUsuario) {


    let indiceLibro = libros.findIndex(libro => libro.id === idLibro);
    let indiceUsuario = usuarios.findIndex(usuario => usuario.id === idUsuario);

    // Verificar si el libro y el usuario fueron encontrados
    if (indiceLibro !== -1 && indiceUsuario !== -1) {

        let libro = libros[indiceLibro];
        let usuario = usuarios[indiceUsuario];

        // Verificar si el libro ya está prestado
        if (libro.disponible) {

            // Marcar el libro como no disponible y registrar el idUsuario
            libro.disponible = false;
            libro.solicitadoPor = idUsuario;

            // Agregar el libro al array de libros prestados
            librosPrestados.push(libro);

            // Agregar el libro al array de libros prestados del usuario
            if (!usuario.librosPrestados) {
                usuario.librosPrestados = [];
            }
            usuario.librosPrestados.push(libro);

            // Actualizar el array de libros
            libros[indiceLibro] = libro;

            // Actualizar el array de usuarios
            usuarios[indiceUsuario] = usuario;

            return `Libro con id ${idLibro} ha sido marcado como no disponible por el usuario con id ${idUsuario}. `;
        } else {
            return `El libro con id ${idLibro} ya ha sido prestado.`;
        }
    } else {
        return `Libro con id ${idLibro} no se ha encontrado en la lista.`;
    }
}





/**b) Implementar una función devolverLibro(idLibro, idUsuario) que
marque un libro como disponible y lo elimine de la lista de libros
prestados del usuario.  */

function devolverLibro(idLibro, idUsuario) {

    let indiceLibro = libros.findIndex(libro => libro.id === idLibro);


    if (indiceLibro !== -1) {

        // Determina si el libro no esta disponible
        if (!libros[indiceLibro].disponible) {

            // Marca el libro como  disponible y registrar el idUsuario
            libros[indiceLibro].disponible = true;
            libros[indiceLibro].entregadoPor = idUsuario;

            // Encuentra el índice del libro en el array de libros prestados
            let indiceLibroPrestado = librosPrestados.findIndex(libro => libro.id === idLibro);

            // Elimina el libro al array de libros prestados

            if (indiceLibroPrestado !== -1) {
                librosPrestados.splice(indiceLibroPrestado, 1);
            }

            return `Libro con id ${idLibro} ha sido marcado como  disponible, entregado por el usuario con id ${idUsuario}.`;
        } else {
            return `El libro con id ${idLibro} ya ha sido devuelto.`;
        }
    } else {
        return `Libro con id ${idLibro} no se ha encontrado en la lista.`;
    }
}



//5. REPORTES
/**a) Crear una función generarReporteLibros() que utilice métodos
avanzados de arrays (.map(), .filter(), .reduce()) para generar un
reporte con la siguiente información:
✓ Cantidad total de libros.
✓ Cantidad de libros prestados.
✓ Cantidad de libros por género.
✓ Libro más antiguo y más nuevo*/

function generarReporteLibros() {

    let cantidadTotalLibros = libros.length
    console.log('\nCantidad total de libros:', cantidadTotalLibros);

    let cantidadLibrosPrestados = libros.filter(libro => !libro.disponible);
    console.log('\nCantidad de libros prestados: ', cantidadLibrosPrestados.length);

    console.log('\nInformación de los libros prestados:');

    cantidadLibrosPrestados.forEach(libro => {

        console.log(`\nID: ${libro.id}, Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anio}, Género: ${libro.genero}`);
    });


    let generosLibros = Array.from(new Set(libros.map(libro => libro.genero)));


    let cantidadLibrosGeneros = generosLibros.map(genero => {
        return {
            genero: genero,
            cantidad: libros.filter(libro => libro.genero === genero).length
        }
    })

    console.log('\nCantidad de libros por género: ', cantidadLibrosGeneros);

    let libroMasAntiguo = libros.reduce((masAntiguo, libro) => (libro.anio < masAntiguo.anio ? libro : masAntiguo), libros[0]);
    let libroMasNuevo = libros.reduce((masNuevo, libro) => (libro.anio > masNuevo.anio ? libro : masNuevo), libros[0]);

    console.log('\nLibro más antiguo:', libroMasAntiguo);
    console.log('\nLibro más nuevo:', libroMasNuevo);

}


//6. IDENTIFICACIÓN AVANZADA DE LIBROS
/**a) Implementar una función librosConPalabrasEnTitulo() que identifique
y muestre todos los libros cuyo título contiene más de una palabra
(no títulos que contengan números ni otros caracteres).*/

function librosConPalabrasEnTitulo(libros) {

    let filtrarLibros = libros.filter(libro => {

        let titulo = libro.titulo.trim();

        // Divide el título en palabras utilizando espacios como separadores
        let palabras = titulo.split(/\s+/);

        // Verifica que cada palabra solo contenga letras (no números ni caracteres especiales)
        let soloLetras = palabras.every(palabra => /^[a-zA-Z]+$/.test(palabra));


        return palabras.length > 1 && soloLetras;
    });

    /**b) La función debe devolver un array con los títulos de esos libros y
    mostrarlo en la consola. */


    let titulosLibrosFiltrados = filtrarLibros.map(libro => libro.titulo);


    console.log('\nLibros cuyo titulo son solo palabras (sin números ni caracteres especiales):');
    console.log(titulosLibrosFiltrados);

    //  array de títulos
    return titulosLibrosFiltrados;

}



//7. CÁLCULOS ESTADÍSTICOS
/**a) Desarrollar una función calcularEstadisticas() que utilice el objeto
Math para calcular y mostrar:
✓ Promedio de años de publicación de los libros.
✓ Año de publicación más frecuente.
✓ Diferencia en años entre el libro más antiguo y el más nuevo. */

function calcularEstadisticas(libros) {
    // 1. Promedio de años de publicación de los libros
    let sumAnios = 0;
    let aniosPublicacion = [];

    for (let i = 0; i < libros.length; i++) {
        let anio = libros[i].anio;
        sumAnios += anio;
        aniosPublicacion.push(anio);
    }

    let promedioAnios = Math.round(sumAnios / libros.length);


    // 2. Año de publicación más frecuente
    let frecuencias = {};
    let maxFrecuencia = 0;
    let anioMasFrecuente;

    for (let i = 0; i < libros.length; i++) {
        let anio = libros[i].anio;


        // Contar la frecuencia de cada año
        if (frecuencias[anio]) {
            frecuencias[anio]++;
        } else {
            frecuencias[anio] = 1;
        }

        // Verificar si este año es el más frecuente
        if (frecuencias[anio] > maxFrecuencia) {
            maxFrecuencia = frecuencias[anio];
            anioMasFrecuente = anio;
        }

    }

    // Calcular diferencia en años entre el libro más antiguo y el más nuevo
    let anioMasAntiguo = Math.min(...aniosPublicacion);
    let anioMasNuevo = Math.max(...aniosPublicacion);
    let diferenciaAnios = anioMasNuevo - anioMasAntiguo;



    console.log(`Promedio de años de publicación: ${promedioAnios}`);
    console.log(`Año de publicación más frecuente: ${anioMasFrecuente}`);
    console.log(`Diferencia en años entre el libro más antiguo y el más nuevo: ${diferenciaAnios}`);
}



//8. MANEJO DE CADENAS
/**a) Crear una función normalizarDatos() que utilice métodos de strings
para:
✓ Convertir todos los títulos a mayúsculas.
✓ Eliminar espacios en blanco al inicio y final de los nombres de
autores.
✓ Formatear los emails de los usuarios a minúsculas.
*/


function normalizarDatos(libros, usuarios) {

    //Convertir todos los títulos a mayúsculas - Eliminar espacios en blanco al inicio y final de los nombres de
    //autores.
    let convertirMayuscula = libros.map(libro => {

        return {
            ...libro,
            titulo: libro.titulo.toUpperCase(),
            autor: libro.autor.trim()
        }
    });


    //Formatear los emails de los usuarios a minúsculas

    let formatearEmails = usuarios.map(usuario => {

        return {
            ...usuario,
            email: usuario.email.toLocaleLowerCase()
        }
    })

    return { libros: convertirMayuscula, usuarios: formatearEmails };

}

// console.log(normalizarDatos(libros, usuarios));

//9.INTERFAZ DE USUARIO POR CONSOLA

function menuPrincipal() {

    console.log(

        "Seleccione una opción:\n" +
        "1. Agregar libro\n" +
        "2. Buscar libro\n" +
        "3. Ordenar libros\n" +
        "4. Borrar libro\n" +
        "5. Registrar usuario\n" +
        "6. Mostrar todos los usuarios\n" +
        "7. Buscar usuario\n" +
        "8. Borrar usuario\n" +
        "9. Prestar libro\n" +
        "10. Devolver libro\n" +
        "11. Generar reporte de libros\n" +
        "12. Libros con palabras en título\n" +
        "13. Calcular estadísticas\n" +
        "14. Normalizar datos\n" +
        "0. Salir\n"
    )
    do {
        opcion = prompt('Seleccione una de las opciones ')
       
        switch (opcion) {
            case '1':
                let titulo = prompt('Ingrese el título del libro: ');
                let autor = prompt('Ingrese el autor del libro: ');
                let anio = parseInt(prompt('Ingrese el año de publicación del libro: '));
                let genero = prompt('Ingrese el género del libro: ');
                let libroAgregado = agregarLibro(titulo, autor, anio, genero); 
                console.log('\nLa información del libro agregado es ', libroAgregado);
                console.log('\nActualización de la lista de libros ', libros);
                break;
               
            case '2':
                let criterio = prompt('Ingrese el criterio de búsqueda (id, titulo, autor, anio, genero): ');
                let valor = prompt('Ingrese el valor de búsqueda: ');
                if (criterio === 'anio') valor = parseInt(valor);
                let resultadoBusqueda = buscarLibro(criterio, valor);
                console.log(resultadoBusqueda)
                break;
            case '3':
                let criterios = prompt('Ingrese el criterio de ordenación (titulo, autor, anio, genero): ');
                ordenarLibros(criterios);
                break;
            case '4':
                let idBorrar = parseInt(prompt("Ingrese el ID del libro a borrar:"));
                console.log(borrarLibro(idBorrar));
                console.log('\nLista de Libros actualizada', libros)
                break;
            case '5':
                let nombre = prompt('Ingrese el nombre del usuario: ');
                let email = prompt('Ingrese el email del usuario: ');

                let usuarioAgregado = registrarUsuario(nombre, email);
                console.log(usuarioAgregado);
                console.log('La información del nuevo usuario agregado ', usuarioAgregado);
                console.log('\nActualización de la lista de usuarios ', usuarios);
                break;
            case '6':
                console.log(mostrarTodosLosUsuarios());
                break;
            case '7':
                let emailBuscar = prompt('Ingrese el email del usuario a buscar: ');
                let busquedaUsuario = buscarUsuario(emailBuscar);
                console.log(busquedaUsuario);
                break;
            case '8':
                let nombreBorrar = prompt('Ingrese el nombre del usuario a borrar: ');
                let emailBorrar = prompt('Ingrese el email del usuario a borrar: ');
                console.log(borrarUsuario(nombreBorrar, emailBorrar));
                break;
            case '9':
                let idLibroPrestar = parseInt(prompt('Ingrese el ID del libro a prestar: '));
                let idUsuarioPrestar = parseInt(prompt('Ingrese el ID del usuario que solicita el libro:'));
                console.log(prestarLibro(idLibroPrestar, idUsuarioPrestar));
                console.log('\nLista de Libros actualizada', libros);
                console.log('\nLista de libros Prestados', librosPrestados);
                break;
            case '10':
                let idLibroDevolver = parseInt(prompt('Ingrese el ID del libro a devolver: '));
                let idUsuarioDevolver = parseInt(prompt('Ingrese el ID del usuario que devuelve el libro: '));
                console.log(devolverLibro(idLibroDevolver, idUsuarioDevolver));
                break;
            case '11':
                generarReporteLibros();
                break;
            case '12':
                librosConPalabrasEnTitulo(libros);
                break;
            case '13':
                calcularEstadisticas(libros);
                break;
            case '14':
                let datosNormalizados = normalizarDatos(libros, usuarios);
                libros = datosNormalizados.libros;
                usuarios = datosNormalizados.usuarios;
                break;
            case '0':
                console.log('Saliendo del programa.');
                break;
            default:
                console.log('Opción no válida, intente nuevamente.');
                break;
        }
    } while (opcion !== '0');

}

// Ejemplo de invocación de la función principal
menuPrincipal();

