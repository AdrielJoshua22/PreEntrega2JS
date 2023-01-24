





class prestamos {
    constructor(id,cotizacion, cuotas,monto){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.cotizacion = cotizacion,
        this.cuotas = cuotas,
        this.monto = monto
       }
    
    mostrarInfoPrestamo(){
        console.log(`${this.id} Su Prestamo PreAprobado es de ${this.monto}, en un total de ${this.cuotas}, en cotizacion ${this.cotizacion} muchas gracias por utilizar el servicio de rappicuotas`)
    }
}


const simulacion1 = new prestamos(1,"frances",12, 100000)

const simulacion2 = new prestamos(2,"frances",9, 1111111)

const simulacion3 = new prestamos(3,"frances",6, 123123)

const presta = [simulacion1,simulacion2,simulacion3]


function simuladorPrestamo(){
    let cotizacion = prompt("Ingrese que tipo de cotizacion quiere")
    let monto = parseInt(prompt("Ingrese monto a solicitar"))
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas"))
 
    const nuevoPrestamo = new prestamos(presta.length+1, cotizacion, cuotas, monto)
    console.log(nuevoPrestamo)
    
    presta.push(nuevoPrestamo)
    console.log(presta)

    let total =(monto/cuotas)
    console.log(total)

    
    
}


 function eliminarPrestamo(array){
    console.log("Ingrese el Id de la cotizacion que desea eliminar")
    for(let elem of array){
        console.log(`Su cotizacion n${elem.id} -cotizacion tipo ${elem.cotizacion} CUOTAS! ${elem.cuotas}`)
    }
    let idEliminar = parseInt(prompt("Ingrese el id a eliminar"))
    let arrayID = array.map(book => book.id)
    console.log(arrayID)
    let indice = arrayID.indexOf(idEliminar)
    array.splice(indice, 1)
    mostrarCatalogoForEach(array)
}

function mostrarCatalogoForEach(array){
    console.log(`Los Prestamos Disponibles para usted son : `)
    array.forEach(
        (prestamos)=>{
            console.log("numero de prestamos",prestamos.id, prestamos.cotizacion, prestamos.cuotas, prestamos.monto)
        }
    )
}

function HistorialDeCotizaciones(array){
    let historial = prompt("INGRESE AL HISTORIAL DE PRESTAMOS")
    let HistorialDeCotizaciones = array.find(
        ()=>HistorialDeCotizaciones() == historial()
        )
    if(HistorialDeCotizaciones == undefined){
        console.log(`PRESTAMO ${Historial} no está en Disponible`)
    }else{
        console.log(HistorialDeCotizaciones)
    }    

}

function menu() {
    let salirMenu = false
    do {
        salirMenu = preguntarOpcion(salirMenu)
    } while (!salirMenu)
}

function preguntarOpcion(salir) {
    let opcionIngresada = parseInt(prompt(`Bienvenidos a RAPPICUOTAS
        Ingrese la opción deseada
           1 - Cotiza Prestamo:
           2 - Eliminar Cotizacion:
           3 - Consultar Prestamos Pre Aprobados:
           4 - Encontrar por prestamo:
           0 - Ir a calculadora de prestamos`))

    switch (opcionIngresada) {
        case 1:
            simuladorPrestamo (presta)
            break
        case 2:
            eliminarPrestamo(presta)
            break
        case 3:
            mostrarCatalogoForEach(presta)
            break
        case 4:
            HistorialDeCotizaciones(presta)
            break
      
        case 0:
            console.log("gracias por utilizar nuestra app")
            salir = true
            return salir
            break
        default:
            console.log("Ingrese una opción correcta")
            break
    }

}


menu()