let N = +prompt ('Введите число');
if (typeof (N) === Number);
else if (N % 2 === 0) {
    console.log ('Это четное число');
}
else if (N % 3 === 0 ) {
    console.log ('Это нечетное число');
}
else if (typeof N !== Number) {
    console.log ('Упс, кажется, вы ошиблись');
} 
else {
    console.log ('Введите число');
}

