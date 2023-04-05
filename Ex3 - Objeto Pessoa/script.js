function Getformdata(){
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()
})

let Name = document.getElementById('Name').value;
let Age = document.getElementById('Age').value;
let Birthdate = document.getElementById('Birthdate').value;

let Person = 
{Name: Name,
    Age:Age,
    Birthdate:Birthdate}

console.log(Person)
}