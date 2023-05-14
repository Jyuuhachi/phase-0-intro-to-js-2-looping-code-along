function writeCards(name, event) {
    let thanks = []
    for (let i = 0; i < name.length; i++) {
        thanks.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return thanks
}
function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(num)
        num--
    }
}