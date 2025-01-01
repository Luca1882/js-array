const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

let fourthTeacher = null;
for(let i = 0; i < teachers.length; i++) {
    if(i === 3){
      fourthTeacher = teachers[i];
    }    
}
console.log(`Il quarto insegnante è: ${fourthTeacher}`);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

for(let i = 0; i < teachers.length; i++) {
      if(i === 4){
        teachers[i] = 'Patrick';
      }    
}
console.log(`Nuovo array:  ${teachers}`);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

let lastTeacher = null;
for(let i = 0; i < teachers.length; i++) {
    if(i === teachers.length - 1){
        lastTeacher = teachers[i];
        teachers.length = teachers.length - 1; // rimuovo l'ultimo elemento
    }
}
console.log(`L'ultimo insegnante rimosso è: ${lastTeacher}`);


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

let firstTeacher = null;

for(let i = 0; i < teachers.length; i++) {
    if(i === 0){
        firstTeacher = teachers[i];
        teachers.shift(); // rimuovo il primo elemento
    }
}
console.log(`Il primo insegnante rimosso è: ${firstTeacher}`);


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

let lastIndex = null;
for(let i = 0; i < teachers.length; i++) {
    if(i === teachers.length - 1){
        lastIndex = teachers.push("Vanessa");
    }
}
console.log(`L'ultimo insegnante è: ${teachers[teachers.length - 1]}`);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

const firstIndex = teachers.unshift("Sarah");

console.log(`Il primo insegnate è: ${teachers[0]}`)

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = null;



// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = null;

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;