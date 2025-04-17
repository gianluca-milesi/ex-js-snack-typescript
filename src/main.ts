//Snack 1
let datoApi: unknown;
if (typeof datoApi === "string") {
  console.log(datoApi.toUpperCase())
} else if (typeof datoApi === "number") {
  console.log(datoApi * 2)
} else if (typeof datoApi === "boolean") {
  console.log(datoApi ? "si" : "no")
} else if (datoApi === null) {
  console.log("Il dato è vuoto")
} else if (Array.isArray(datoApi)) { //o instanceof Array
  console.log(datoApi.length)
} else if (datoApi instanceof Promise) {
  datoApi.then(res => console.log(res))
} else {
  console.log("Tipo non supportato")
}

//Snack 2
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: "indeterminato" | "determinato" | "freelance"
}

//Snack 3
type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[],
  certificazioni: string[]
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}