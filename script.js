let points = 0;
let question = ["Wat is 5 + 5?", "Wat is 9 / 3?", "Wat komt na 29?", "Wat is 10 * 10?", "Wat is 55 + 15?", "Wat is 101 - 5?", "Wat is 60 / 10?", "Wat is 45 * 2?", "Wat is 3 + 200?", "Wat is 10 / 5?", "Wat is 100 * 4?"];
let answer = [10, 3, 30, 100, 70, 96, 6, 90, 203, 2, 400];
// arrayplek
let questionNumber = 0;

// zet de vraag op de pagina
document.getElementById('question').innerHTML = question[questionNumber];

// Voeg een referentie toe aan het antwoord-HTML-element
let answerElement = document.getElementById('answer');

//start de quiz
quizQuestion(answer[questionNumber], 2000);

//functie om een vraag te stellen
function quizQuestion(questionAnswer, delay) {
    setTimeout(() => {
        // Verwijder het prompt-venster en voeg een inputveld toe
        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.placeholder = "Vul hier je antwoord in";
        document.getElementById('question').appendChild(inputElement);
        inputElement.focus();

        // Voeg een knop toe om het antwoord in te dienen
        const submitButton = document.createElement("button");
        submitButton.textContent = "Indienen";
        document.getElementById('question').appendChild(submitButton);

        // Voeg een eventlistener toe aan de knop om het antwoord te controleren
        submitButton.addEventListener("click", () => {
            const filledInAnswer = inputElement.value;

            if (filledInAnswer == questionAnswer) {
                // 1 punt erbij voor goed antwoord
                updateScore(1);
            } else {
                // 1 punt eraf voor slecht antwoord
                updateScore(-1);
            }

            // Verwijder het inputveld en de knop
            inputElement.remove();
            submitButton.remove();

            // Ga door naar de volgende vraag
            questionNumber++;
            if (questionNumber < question.length) {
                document.getElementById('question').innerHTML = question[questionNumber];
                quizQuestion(answer[questionNumber], delay);
            } else {
                // Toon het eindscherm met het puntenaantal
                answerElement.innerHTML = "";
                document.getElementById('question').innerHTML = "Je bent klaar! Je hebt zoveel punten: " + points;
            }
            console.log(points);
        });
    }, delay);
}

//functie om de score bij te werken
const updateScore = (value) => {
    points += value;

    if (value === 1) {
        answerElement.innerHTML = "Goed gedaan, dat was het juiste antwoord! +1 punt.";
    } else if (value === -1) {
        answerElement.innerHTML = "Dat klopte niet helemaal, -1 punt.";
    }
};
