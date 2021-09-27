function letterGuesser() {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
}


let letterGuesser = Math.floor(Math.random() * 26);
prompt(` Your letter is ${letterGuesser}. Guess the ${letterGuesser}'s index number. `);

function returnText() {
  let input = document.getElementById("userInput").value;
  alert(input);
}

if (input == letterGuesser) {
  alert("You are a genius at the alphabet!");
else
  alert(`Incorrect, you will have to re-learn the abc's. The index of ${letterGuesser} is actually ${letterGuesser.indexOf()}.`)
}