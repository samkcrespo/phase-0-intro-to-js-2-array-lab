const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
cats.push("Ralph");
}

function destructivelyPrependCat () {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat () {
    cats.shift ();
}
function appendCat () {
    const allCats = [...cats, "Broom"];
    return allCats;
}

function prependCat () {
    const allCats = ["Arnold", ...cats];
    return allCats;
}

function removeLastCat () {
    return cats.slice(0, cats.length-1);
}
function removeFirstCat () {
    return cats.slice(1);
}// Write your solution here!
