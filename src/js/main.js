let frutas=["Naranja", "Mango", "Manzana", "Lima", "Limon", "Uva", "Toronja", "Mango", "Pera", "Banano", "Mandarina"]

frutas.forEach(frutas => {console.log(frutas)})

let frutasCitricas=[]
let frutasNoCitricas=[]

frutas.forEach(frutas => {
    if(["Naranja","Limon","Lima","Toronja","Mandarina"].includes(frutas)){
        frutasCitricas.push(frutas);
    }
    else{
        frutasNoCitricas.push(frutas);
    }
});

console.log("Frutas citricas")
console.table(frutasCitricas)

console.log("Frutas no citricas")
console.table(frutasNoCitricas)