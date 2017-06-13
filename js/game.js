var grid = new Array(3);
grid[0] = new Array(3);
grid[1] = new Array(3);
grid[2] = new Array(3);
var player = 1;
var gameWon = 0;
var firstplay = 1;
var GameMode = 0;
var mod = document.getElementById('myModal');
var opt = document.getElementById('options');
var turn = document.getElementById('playerTurn');
function initializeGrid() {
    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++)
            grid[i][j] = "";
}

function play(row, col) {
    if (firstplay == 1) {
        firstplay = 0;
        initializeGrid();
        $("#start").html("Run Code");
        $("#options").css("display", "block");
        $("#endBtn").css("display", "inline-block");
    }
    else if (GameMode == 0)
        multiPlay(row, col);
    else if (GameMode == 1)
        randomPlay(row, col);
    else if (GameMode == 2)
        chalPlay(row, col);
}
function checkWin() {
    //check horizontal
    for (i = 0; i < 3; i++) {
        if ((grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]) && grid[i][0] != "" && grid[i][1] != undefined && grid[i][2] != "") {
            console.log("horizontal won");
            return true;
        }
    }
    //check vertical
    for (i = 0; i < 3; i++) {
        console.log("i is: " + i);
        console.log("grid[" + i + "][0] is " + grid[i][0]);
        console.log("grid[" + i + "][1] is " + grid[i][1]);
        console.log("grid[" + i + "][2] is " + grid[i][2]);
        if ((grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i]) && grid[0][i] != "" && grid[1][i] != "" && grid[2][i] != "") {
            console.log("vertical won");
            return true;
        }
    }
    //check diagonal
    if (((grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) || (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0])) && grid[1][1] !== "") {
        console.log("diagonal won");
        return true;
    }
    var tieGame = true;
    for (var i = 0; i < 3; i++) {
        for (var x = 0; x < 3; x++) {
            if (grid[i][x] == "") {
                tieGame = false;
            }
        }
    }
    if (tieGame == true) {
        if (GameMode == 0)
            multiEndGame(0);
        else if (GameMode == 1)
            randomEndGame(0);
        else
            chalEndGame(0);
    }
    return false;
}

function checkLegalMove(row, col) {
    console.log(grid[row][col]);
    if (grid[row][col] == "")
        return 1;
    else {
        alert("Invalid Move!");
        return 0;
    }
}

$("#setPlayerTurnOne").click(function () {
    turn.style.display = "none";
});
$("#setPlayerTurnTwo").click(function () {
    turn.style.display = "none";
    if (GameMode == 1)
        randomAITurn();
    else {
        chalAITurn();
    }
});
$("#setOptionMulti").click(function () {
    GameMode = 0;
    opt.style.display = "none";
});
$("#setOptionRandom").click(function () {
    GameMode = 1;
    opt.style.display = "none";
    $("#playerTurn").css("display", "block");
});
$("#setOptionChal").click(function () {
    GameMode = 2;
    opt.style.display = "none";
    $("#playerTurn").css("display", "block");
});

$(".endBtn").click(function () {

    initializeGrid();
    player = 1;
    gameWon = 0;
    firstplay = 1;
    GameMode = 0;
    turnCount = 0;
    $("#start").html("Start");
    $("#square_one_text").html("");
    $("#square_two_text").html("");
    $("#square_three_text").html("");
    $("#square_four_text").html("");
    $("#square_five_text").html("");
    $("#square_six_text").html("");
    $("#square_seven_text").html("");
    $("#square_eight_text").html("");
    $("#square_nine_text").html("");
    $("#endBtn").css("display", "none");
    $(".modal_text").html("");
    mod.style.display = "none";
});

$("#playAgainBtn").click(function () {
    initializeGrid();
    player = 1;
    gameWon = 0;
    firstplay = 1;
    GameMode = 0;
    turnCount = 0;
    $("#start").html("Start");
    $("#square_one_text").html("");
    $("#square_two_text").html("");
    $("#square_three_text").html("");
    $("#square_four_text").html("");
    $("#square_five_text").html("");
    $("#square_six_text").html("");
    $("#square_seven_text").html("");
    $("#square_eight_text").html("");
    $("#square_nine_text").html("");
    mod.style.display = "none";
    $(".modal_text").html("");
});

function playTurn(row, col) {
    switch (row) {
        case 0:
            switch (col) {
                case 0:
                    if (player == 1) {
                        $("#square_one_text").html("X");
                        grid[0][0] = 'X';
                    } else {
                        $("#square_one_text").html("O");
                        grid[0][0] = 'O';
                    }
                    break;
                case 1:
                    if (player == 1) {
                        $("#square_two_text").html("X");
                        grid[0][1] = 'X';
                    } else {
                        $("#square_two_text").html("O");
                        grid[0][1] = 'O';
                    }
                    break;
                case 2:
                    if (player == 1) {
                        $("#square_three_text").html("X");
                        grid[0][2] = 'X';
                    } else {
                        $("#square_three_text").html("O");
                        grid[0][2] = 'O';
                    }
                    break;
            }
            break;
        case 1:
            switch (col) {
                case 0:
                    if (player == 1) {
                        $("#square_four_text").html("X");
                        grid[1][0] = 'X';
                    } else {
                        $("#square_four_text").html("O");
                        grid[1][0] = 'O';
                    }
                    break;
                case 1:
                    if (player == 1) {
                        $("#square_five_text").html("X");
                        grid[1][1] = 'X';
                    } else {
                        $("#square_five_text").html("O");
                        grid[1][1] = 'O';
                    }
                    break;
                case 2:
                    if (player == 1) {
                        $("#square_six_text").html("X");
                        grid[1][2] = 'X';
                    } else {
                        $("#square_six_text").html("O");
                        grid[1][2] = 'O';
                    }
                    break;
            }
            break;
        case 2:
            switch (col) {
                case 0:
                    if (player == 1) {
                        $("#square_seven_text").html("X");
                        grid[2][0] = 'X';
                    } else {
                        $("#square_seven_text").html("O");
                        grid[2][0] = 'O';
                    }
                    break;
                case 1:
                    if (player == 1) {
                        $("#square_eight_text").html("X");
                        grid[2][1] = 'X';
                    } else {
                        $("#square_eight_text").html("O");
                        grid[2][1] = 'O';
                    }
                    break;
                case 2:
                    if (player == 1) {
                        $("#square_nine_text").html("X");
                        grid[2][2] = 'X';
                    } else {
                        $("#square_nine_text").html("O");
                        grid[2][2] = 'O';
                    }
                    break;
            }
            break;
    }
    turnCount++;
    if (player == 1)
        player = 2;
    else
        player = 1;
}

function runcode() {
    eval(editor.getValue());
}
