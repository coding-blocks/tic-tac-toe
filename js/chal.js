var turnCount = 0;
function chalPlay(row, col) {
    if (checkLegalMove(row, col) == true) {
        playTurn(row, col);
        if (checkWin() == true)
            chalEndGame(1);
        else {
            chalAITurn();
            if (checkWin() == true)
                chalEndGame(2);
        }
    }
}

function chalAITurn() {
    var playerChar = (player == 1) ? "X" : "O";
    var antiChar = (player == 1) ? "O" : "X";
    if (!chalDefend(playerChar))
        if (!chalDefend(antiChar)) {
            var initialStr = new Array(5);
            initialStr[0] = playerChar + antiChar;
            initialStr[1] = antiChar + playerChar;
            initialStr[2] = playerChar + playerChar + antiChar;
            initialStr[3] = playerChar + antiChar + playerChar;
            initialStr[4] = antiChar + playerChar + playerChar;
            var cornerStr = grid[0][0] + grid[0][2] + grid[2][0] + grid[2][2];
            for (var i = 0; i < 5; i++)
                if (cornerStr == initialStr[i] && grid[1][1] == "")
                    for (var i = 0; i < 3; i += 2)
                        for (var j = 0; j < 3; j += 2)
                            if (grid[i][j] == "") {
                                playTurn(i, j);
                                return;
                            }

            if (turnCount == 2 && grid[1][1] == "") {
                playTurn(1, 1);
                return;
            }
            if (!chalAttack()) {
                if (turnCount == 0) {
                    playTurn(Math.floor(Math.random() * 2) * 2, Math.floor(Math.random() * 2) * 2);
                    return;
                }
                else if (grid[1][1] == "") {
                    playTurn(1, 1);
                    return;
                }
                else
                    for (var i = 0; i < 3; i++)
                        for (var j = 0; j < 3; j++)
                            if (grid[i][j] == "") {
                                playTurn(i, j);
                                return;
                            }
            }
        }
}

function chalDefend(char) {
    if (turnCount < 3)
        return 0;
    var winString = char + char;
    for (var i = 0; i < 3; i++) {
        var str = "";
        for (var j = 0; j < 3; j++)
            str += grid[i][j];
        if (str == winString) {
            for (j = 0; j < 3; j++)
                if (grid[i][j] == "") {
                    playTurn(i, j);
                    return 1;
                }
        }
    }

    for (var i = 0; i < 3; i++) {
        var str = "";
        for (var j = 0; j < 3; j++)
            str += grid[j][i];
        if (str == winString) {
            for (j = 0; j < 3; j++)
                if (grid[j][i] == "") {
                    playTurn(j, i);
                    return 1;
                }
        }
    }

    var diagSum = grid[0][0] + grid[1][1] + grid[2][2];
    if (diagSum == winString)
        for (i = 0; i < 3; i++)
            if (grid[i][i] == "") {
                playTurn(i, i);
                return 1;
            }

    diagSum = grid[0][2] + grid[1][1] + grid[2][0];
    if (diagSum == winString)
        for (i = 0; i < 3; i++)
            if (grid[i][2 - i] == "") {
                playTurn(i, 2 - i);
                return 1;
            }
    return 0;
}

function chalAttack() {
    var playerChar = (player == 1) ? "X" : "O";
    var antiChar = (player == 1) ? "O" : "X";
    var i, j;
    if (grid[0][0] + grid[0][2] + grid[2][2] + grid[2][0] == antiChar || grid[0][0] + grid[0][2] + grid[2][2] + grid[2][0] == antiChar + antiChar) {
        for (i = 0; i < 3; i++) {
            if (grid[i][0] + grid[i][1] + grid[i][2] == playerChar) {
                if (i == 1)
                    for (j = 0; j < 3; j++)
                        if (grid[i][j] == "") {
                            playTurn(i, j);
                            return 1;
                        }
                        else
                            for (j = 2; j >= 0; j--)
                                if (grid[i][j] == "") {
                                    playTurn(i, j);
                                    return 1;
                                }
            }
            if (grid[0][i] + grid[1][i] + grid[2][i] == playerChar) {
                if (i == 1)
                    for (j = 0; j < 3; j++)
                        if (grid[j][i] == "") {
                            playTurn(j, i);
                            return 1;
                        }
                        else
                            for (j = 2; j >= 0; j--)
                                if (grid[j][i] == 0) {
                                    playTurn(j, i);
                                    return 1;
                                }
            }
        }
        if (grid[0][0] + grid[1][1] + grid[2][2] == playerChar) {
            for (i = 2; i >= 0; i--)
                if ((grid[i][i] == "") && (grid[i][0] + grid[i][1] + grid[i][2] == playerChar || grid[0][i] + grid[1][i] + grid[2][i] == playerChar)) {
                    playTurn(i, i);
                    return 1;
                }
            for (i = 2; i >= 0; i--)
                if (grid[i][i] == "")
                    if (grid[i][0] + grid[i][1] + grid[i][2] == antiChar && grid[0][i] + grid[1][i] + grid[2][i] == antiChar) {
                        playTurn(i, i);
                        return 1;
                    }
            for (i = 2; i >= 0; i--)
                if (grid[i][i] == "") {
                    playTurn(i, i);
                    return 1;
                }
        }
        else if (grid[0][2] + grid[1][1] + grid[2][0] == playerChar) {
            for (i = 2; i >= 0; i--)
                if (grid[i][2 - i] == "" && (grid[i][0] + grid[i][1] + grid[i][2] == playerChar || grid[0][2 - i] + grid[1][2 - i] + grid[2][2 - i] == playerChar)) {
                    playTurn(i, 2 - 1);
                    return 1;
                }
            for (i = 2; i >= 0; i--)
                if (grid[i][2 - i] == "") {
                    if (grid[i][0] + grid[i][1] + grid[i][2] == antiChar && grid[0][2 - i] + grid[1][2 - i] + grid[2][2 - i] == antiChar) {
                        playTurn(i, 2 - i);
                        return 1;
                    }
                }
            for (i = 2; i >= 0; i--)
                if (grid[i][2 - i] == "") {
                    playTurn(i, 2 - i);
                    return 1;
                }
        }
    }
    else {
        if (grid[0][0] + grid[1][1] + grid[2][2] == playerChar) {
            for (i = 2; i >= 0; i--)
                if (grid[i][i] == "" && (grid[i][0] + grid[i][1] + grid[i][2] == playerChar || grid[0][i] + grid[1][i] + grid[2][i] == playerChar)) {
                    playTurn(i, i);
                    return 1;
                }
            for (i = 2; i >= 0; i--)
                if (grid[i][i] == "")
                    if (grid[i][0] + grid[i][1] + grid[i][2] == antiChar && grid[0][i] + grid[1][i] + grid[2][i] == antiChar) {
                        playTurn(i, i);
                        return 1;
                    }
            for (i = 2; i >= 0; i--) {
                if (grid[i][i] == "") {
                    playTurn(i, i);
                    return 1;
                }
            }
        }

        else if (grid[0][2] + grid[1][1] + grid[2][0] == playerChar) {
            for (i = 2; i >= 0; i--)
                if (grid[i][2 - i] == "" && (grid[i][0] + grid[i][1] + grid[i][2] == playerChar || grid[0][2 - i] + grid[1][2 - i] + grid[2][2 - i] == playerChar)) {
                    playTurn(i, 2 - i);
                    return 1;
                }
            for (i = 2; i >= 0; i--)
                if (grid[i][2 - i] == "")
                    if (grid[i][0] + grid[i][1] + grid[i][2] == antiChar && grid[0][2 - i] + grid[1][2 - i] + grid[2][2 - i] == antiChar) {
                        playTurn(i, 2 - i);
                        return 1;
                    }

            for (i = 2; i >= 0; i--)
                if (grid[i][2 - i] == "") {
                    playTurn(i, 2 - i);
                    return 1;
                }
        }

        else {
            for (i = 0; i < 3; i++) {
                if (grid[i][0] + grid[i][1] + grid[i][2] == playerChar) {
                    if (i == 1)
                        for (j = 0; j < 3; j++)
                            if (grid[i][j] == "") {
                                playTurn(i, j);
                                return 1;
                            }
                            else
                                for (j = 2; j >= 0; j--)
                                    if (grid[i][j] == "") {
                                        playTurn(i, j);
                                        return 1;
                                    }
                }
                else if (grid[0][i] + grid[1][i] + grid[2][i] == playerChar) {
                    if (i == 1) {
                        for (j = 0; j < 3; j++) {
                            if (grid[j][i] == "") {
                                playTurn(j, i);
                                return 1;
                            }
                        }
                    }
                    else {
                        for (j = 2; j >= 0; j--) {
                            if (grid[j][i] == "") {
                                playTurn(j, i);
                                return 1;
                            }
                        }
                    }
                }
            }
        }
    }
    return 0;
}

function chalEndGame(num) {
    if (num == 0) {
        $(".modal_text").html("Tie game!");
        $("#myModal").css("display", "block");
    }
    if (num == 1) {
        $(".modal_text").html("Player Wins!");
        $("#myModal").css("display", "block");
    }
    if (num == 2) {
        $(".modal_text").html("AI Wins!");
        $("#myModal").css("display", "block");
    }
}
