
function* numeroSequencial() {
    let numero = 1;
    while (true) {
        yield numero.toString().padStart(2, '0');
        numero += 1;
    }
}

module.exports = numeroSequencial;
