function wyświetl_diody(ile_diod: number) {
    
    ile_wyświetliliśmy = 0
    for (let kolumna = 0; kolumna < 3; kolumna++) {
        for (let wiersz = 0; wiersz < 5; wiersz++) {
            if (ile_wyświetliliśmy < ile_diod) {
                led.plot(kolumna + 1, wiersz)
                ile_wyświetliliśmy += 1
            } else {
                led.unplot(kolumna + 1, wiersz)
            }
            
        }
    }
}

let ile_wyświetliliśmy = 0
while (true) {
    wyświetl_diody(randint(0, 15))
    basic.pause(500)
}
basic.forever(function on_forever() {
    
})
