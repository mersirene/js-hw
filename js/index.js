const a = parseFloat(prompt('Write A equivalent'));
const b = parseFloat(prompt('Write B equivalent'));
const c = parseFloat(prompt('Write C equivalent'));

function quadraticEquasion(a, b, c) {
    const d = countDiscr(a, b, c);
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / 2 * a;
        const x2 = (-b - Math.sqrt(d)) / 2 * a;
        return '[x1; x2]';
    } else if (d === 0){
        const x3 = -b / 2 * a;
        return x3;
    } else {
        return 'Ooops, no answer for you..' ;
    }
}

function countDiscr(a, b, c) {
    return b * b - 4 * a * c;
}