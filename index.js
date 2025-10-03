let hiddenNumber
let guessAmount = 1
let valid = false
let guess

while (!valid) {
    let setDifficulty = prompt('välj svårighetsgrad: lätt, medium, svår')
    switch (setDifficulty) {
        case 'lätt':
            hiddenNumber = Math.floor(Math.random() * 11)
            guess = prompt('gissa ett nummer mellan 1 - 10')
            valid = true
            break
        case 'medium':
            hiddenNumber = Math.floor(Math.random() * 51)
            guess = prompt('gissa ett nummer mellan 1 - 50')
            valid = true
            break
        case 'svår':
            hiddenNumber = Math.floor(Math.random() * 101)
            guess = prompt('gissa ett nummer mellan 1 - 100')
            valid = true
            break
        default:
            alert('ogiltig svårighetsgrad')
    }
}

while (guess === null) {
    guess = prompt('gissa nummret' + guessAmount++)
}
while (guess != hiddenNumber) {
    if (guess < hiddenNumber) {
        alert('För Lågt!')
        guess = prompt(
            'gissa nummret' + '          dina gissningar: ' + guessAmount++
        )
    } else if (guess > hiddenNumber) {
        alert('För högt!')
        guess = prompt(
            'gissa nummret' + '          dina gissningar: ' + guessAmount++
        )
    } else {
        alert('Du skrev ej in ett giltigt nummer')
        guess = prompt(
            'gissa nummret' + '          dina gissningar: ' + guessAmount
        )
    }
}
if (guess == hiddenNumber && guess != null) {
    alert('Rätt gissat!' + ' dina gissningar: ' + guessAmount)
}
