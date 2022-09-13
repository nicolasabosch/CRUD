document.addEventListener("DOMContentLoaded", () =>{

//ej 1
    let alumno1 = {

    nombre: "Gonzalo",
    apellido: "Anapolsky",
    dni: "47974720",
    edad: 20,
    anio: 4,
    curso: "A",
    nota: 10

}

let alumno2 = {

    nombre: "Bruno",
    apellido: "Wurst",
    dni: "46198321",
    edad: 20,
    anio: 4,
    curso: "A",
    nota: 8

}

let alumno3 = {

    nombre: "Sebastian",
    apellido: "Korsunsky",
    dni: "47765432",
    edad: 20,
    anio: 5,
    curso: "A",
    nota: 7

}

let alumno4 = {

    nombre: "Shai",
    apellido: "Avruj",
    dni: "45539543",
    edad: 20,
    anio: 5,
    curso: "A",
    nota: 5

}

let alumno5 = {

    nombre: "Tomas",
    apellido: "Lami",
    dni: "45654321",
    edad: 20,
    anio: 4,
    curso: "B",
    nota: 4

}

let alumno6 = {

    nombre: "Alan",
    apellido: "Dana",
    dni: "46654321",
    edad: 20,
    anio: 4,
    curso: "B",
    nota: 3

}
let alumno7 = {

    nombre: "Nicolas",
    apellido: "Abosch",
    dni: "47026789",
    edad: 20,
    anio: 3,
    curso: "B",
    nota: 3

}
let alumno8 = {

    nombre: "Francisco",
    apellido: "Mazza",
    dni: "45027459",
    edad: 20,
    anio: 3,
    curso: "B",
    nota: 7

}

let alumnos = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8];

//ej 2
const capitalizar = () => {
    
    let str="gonza";
    nueva = str.charAt(0).toUpperCase() + str.slice(1);
    return(nueva);
    
}
console.log(capitalizar());


//ej 3
const mostrarAlumnos=(alumno) => {

    console.log("DNI: " + alumno.dni);
    console.log("Nombre Y Apellido: " + alumno.nombre + " " + alumno.apellido);
    console.log("Curso: " + alumno.anio + "°" + alumno.curso);
    console.log("Nota: " + alumno.nota);
    

}
let num = 0;
console.log(mostrarAlumno(alumno=alumnos[num]));

//ej 4
let capitalizara = alumnos.map((alumno) => {
    return alumno.nombre +" " + alumno.apellido;

})
console.log(capitalizara);

//ej 5
let mostrarAlumno = alumnos.map((showAlumno) => {
    return showAlumno.nombre;

})
console.log(mostrarAlumno);

//ej 6

let alumnosAprobados = alumnos.filter((aprobados) => {
return aprobados.nota >=6;

})
console.log(alumnosAprobados);



//ej 7
let alumnosCuarto = alumnos.filter((cuarto) => {
    return cuarto.anio >=4  ;
    
    })
    console.log(alumnosCuarto);

//ej 8
let alumnosdelB = alumnos.filter((delB) => {
    return delB.curso =="B"
    
    })
    console.log(alumnosdelB);

})


