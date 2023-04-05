var total = 0

for(let i = 0; i <= 100; i++) {
    if(i%2 == 0) {
        total = total + 1
    }
}

console.log('de 0 a 100 temos ' + total + 'números pares')