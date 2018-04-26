var box = $("td"); //Array used to check for the winning patterns.
var playerTurn = 0; //Variable to switch player turns after each click.
var playerChoiceAtEnd; //Variable which will decide if the player wants to play again or not.


//Function which is responsible for colouring the boxes according to which players turn it is.
function clickedBox(){
    $("td").click(function(){
        if(this.classList != "X" && this.classList != "O"){
            if(playerTurn == 0){
                $(".playerTurn").html("It is O's turn");
                this.classList.add("X");
                playerTurn = 1;
            } else{
                $(".playerTurn").html("It is X's turn");
                this.classList.add("O");
                playerTurn = 0;
            }
        }
    });
}

//Function to reset the game by clearing the classes.
function reset(){
    $("td").each(function(){
        this.className = "";
    });

    playerTurn = 0;
    
    $(".playerTurn").html("It is X's turn");
    
    playerChoiceAtEnd = " ";
}

//Function to check if a player has 3 boxes in a row. 8 possible patterns to win.
function checkPattern(){

    if( (box[0].className == "X" && box[1].className == "X" && box[2].className == "X") || 
    (box[0].className == "X" && box[3].className == "X" && box[6].className == "X") ||
    (box[0].className == "X" && box[4].className == "X" && box[8].className == "X") ||
    (box[1].className == "X" && box[4].className == "X" && box[7].className == "X") ||
    (box[2].className == "X" && box[5].className == "X" && box[8].className == "X") ||
    (box[3].className == "X" && box[4].className == "X" && box[5].className == "X") ||
    (box[6].className == "X" && box[7].className == "X" && box[8].className == "X") ||
    (box[2].className == "X" && box[4].className == "X" && box[6].className == "X"))
    {
        playerChoiceAtEnd = prompt("Player 1 wins\nPlay Again? y/n"); //Prompt at the end of the game, player decides if they want to play again or not.
        checkPlayerInput();
    } else if( (box[0].className == "O" && box[1].className == "O" && box[2].className == "O") || 
    (box[0].className == "O" && box[3].className == "O" && box[6].className == "O") ||
    (box[0].className == "O" && box[4].className == "O" && box[8].className == "O") ||
    (box[1].className == "O" && box[4].className == "O" && box[7].className == "O") ||
    (box[2].className == "O" && box[5].className == "O" && box[8].className == "O") ||
    (box[3].className == "O" && box[4].className == "O" && box[5].className == "O") ||
    (box[6].className == "O" && box[7].className == "O" && box[8].className == "O") ||
    (box[2].className == "O" && box[4].className == "O" && box[6].className == "O"))
    {
        playerChoiceAtEnd = prompt("Player 2 wins\nPlay Again? y/n"); //Prompt at the end of the game, player decides if they want to play again or not.
        checkPlayerInput();
    }
}

//Function to check what the input of the player was at the end of the game and reset accordingly.
function checkPlayerInput(){
    if(playerChoiceAtEnd == "y"){
        reset();
    } else if(playerChoiceAtEnd == "n"){
        alert("End of Game");
    }
}

//SetInterval functions which run the checkPattern function every second to check all the time.
window.setInterval(checkPattern, 1000);

//Get the button with the reset id from the html and invoke the reset function when clicked.
$("#reset").click(reset);

//run clickedBox function in order to color the boxes after each click. 
clickedBox();
