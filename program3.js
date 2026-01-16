    let attempt=0;
    let score=0; 

function Game() {  
        let val = Number(document.getElementById("input").value);
        console.log("User Input Value",val);
        let guess=Math.floor((Math.random() *10)+1);
        // let guess=2;
        console.log("Computer Guess: ",guess);
        attempt++;
        document.getElementById("attempt").innerHTML = `${attempt}`;
            if(val===guess) {
            score++;
            document.getElementById("score").innerHTML = score;
            document.getElementById("result").innerHTML =  `🎉 Congratulations! You guessed it right.😎`;
            }
            else{
                document.getElementById("result").innerHTML = `😅OPS! You wrong. My Guess was ${guess}😜`;
            }
}
     


// submit button click
document.getElementById("btn").onclick = function() {
    let inputEl = document.getElementById("input");
    let val = inputEl.value;

    // Validate input
    if(val === "") {
        alert("⚠️ Please enter a number before submitting!");
        inputEl.focus(); 
        return; 
    }
    Game();
}
   


function reset() {
    attempt =0;
    score =0;
    document.getElementById("attempt").innerHTML = attempt;
    document.getElementById("score").innerHTML = score;
}


// reset button click
document.getElementById("reset").onclick = function() {
    reset();
}