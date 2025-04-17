//Snack 1
let datoApi: unknown;
if (typeof datoApi === "string") {
  console.log(datoApi.toUpperCase())
} else if (typeof datoApi === "number") {
  console.log(datoApi * 2)
} else if (typeof datoApi === "boolean") {
  console.log(datoApi ? "si" : "no")
}
console.log("Tipo non supportato")
