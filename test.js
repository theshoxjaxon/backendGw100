console.log("A"); // syncronniy ish
setTimeout(() => {
    console.log("G"); // Mikro tasklar
}, 100)
console.log("B");// syncronniy ish
console.log("C");// syncronniy ish
setTimeout(() => console.log("D"), 0); // Mikro tasklar
Promise.resolve().then(() => console.log("F")).then(() => console.log("T")); // Makro tasklar
setTimeout(() => console.log("H"), 100); // Mikro tasklar
console.log("Y");// syncronniy ish


// ABCY DGFTH Saidaziz 2
//ABCYFTDGH Baxtibay 5
// ABCYFTHDG abdulloh 2
// ABCYGFTHD //Kamronchik 007 2
// ABCYFTDHG // Muslima 3-
// ABCYDHFTG Obidjon 2
// ABCYFTDGH SHoxrux 5
// ABCYFTDGH Saidamir 5
// ABCYFTDHG Abubakr 2
// ABCYFTGDH O'ktam kamaz 2


