// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.

function func1<T>(val: T): T {
    return val
}

// 2. Ge ett exempel på en funktion med två generiska typer.

function func2<T, U>(val: T, valTwo: U): object {
    return {val, valTwo}
}

// 3. Ge ett exempel på ett interface med en generisk typ.

interface Exempel<T> {
    HejSandra: T;
}