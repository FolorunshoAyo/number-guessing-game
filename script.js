(function(){
    let formEL = document.getElementById("numberGuess");
    let report = document.getElementById("report");
    let reportContainer = document.querySelector(".reportContainer");
    let prevGuessCounter = 0, remGuessesCounter = 10, correctGuessesCounter = 0;

    let generateRandomNumber = function(){
        let randomNumber = Math.floor(Math.random() * 100);
        return randomNumber;
    };

    let updatePrevGuess = function(){
        let prevGuessEl = document.getElementById("prevGuesses");
        prevGuessCounter++;

        prevGuessEl.textContent = prevGuessCounter;
    };

    let guessesRemaining = function(){
        let remGuessesEl = document.getElementById("remGuesses");

        if(remGuessesCounter == 0){
            alert("You have exceeded your guess limit, Restarting");
            location.reload();
        }
        remGuessesCounter--;

        remGuessesEl.textContent = remGuessesCounter;
    };

    let correctGuessUpdate = function(){
        let correctGuessEl = document.getElementById("correctGuesses");
        correctGuessesCounter++;

        correctGuessEl.textContent = correctGuessesCounter;
    };

    let numberToGuess = generateRandomNumber();
    console.log(numberToGuess);

    let check = function(numberInputed){
        if(numberInputed < numberToGuess){
            report.textContent = "Number is too low try again";
            reportContainer.classList.remove("hide");
            setTimeout(()=>{
                reportContainer.classList.add("hide")
            }, 2000);
            updatePrevGuess();
            guessesRemaining();
        }else if(numberInputed > numberToGuess){
            report.textContent = "Number is too high try again";
            reportContainer.classList.remove("hide");
            setTimeout(()=>{
                reportContainer.classList.add("hide");
            }, 2000);
            updatePrevGuess();
            guessesRemaining();
        }else{
            report.textContent = "Right Guess!!";
            reportContainer.classList.remove("hide");
            report.classList.add("success");
            setTimeout(()=>{
                reportContainer.classList.add("hide");
                report.classList.remove("success");
            }, 4000);
            correctGuessUpdate();
            setTimeout(() => {
                alert("You guessed the right number, Restarting...");
                window.location.reload();
            }, 8000);
        }
    };

    formEL.addEventListener("submit", function(e){
        e.preventDefault();
        let textAreaEl = document.getElementById("number");
        let numberGuessed = textAreaEl.value
        if(numberGuessed !== ""){
        check(numberGuessed);
        }else{
            report.textContent = "Please provide a number";
            reportContainer.classList.remove("hide");
            setTimeout(()=>{
                reportContainer.classList.add("hide")
            }, 2000);
        }
        textAreaEl.value = "";
    },false);

}());