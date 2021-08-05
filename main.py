def wyświetl_diody(ile_diod: number):
    global ile_wyświetliliśmy
    ile_wyświetliliśmy = 0
    for kolumna in range(3):
        for wiersz in range(5):
            if ile_wyświetliliśmy < ile_diod:
                led.plot(kolumna + 1, wiersz)
                ile_wyświetliliśmy += 1
            else:
                led.unplot(kolumna + 1, wiersz)
ile_wyświetliliśmy = 0
while True:
    wyświetl_diody(randint(0, 15))
    basic.pause(500)

def on_forever():
    pass
basic.forever(on_forever)
