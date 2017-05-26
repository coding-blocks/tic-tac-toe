function randomPlay(row, col) {
  if (checkLegalMove(row, col) == true) {
    playTurn(row, col);
    if (checkWin() == true)
      randomEndGame(1);
    else {
        randomAITurn();
    }
  }
}

function randomAITurn () {
    var xrow;
    var xcol;
    var flag = 1;
    while (flag) {
      xrow= Math.floor(Math.random()*3);
      xcol= Math.floor(Math.random()*3);
      if (checkLegalMove(xrow, xcol) == true) {
        flag=0;
        playTurn(xrow, xcol);
        if (checkWin() == true)
            randomEndGame(2);
      }
    }
}

function randomEndGame(num) {
  if (num == 0) {
    $(".modal_text").html("Tie game!");
    $("#myModal").css("display", "block");
  }
  if (num == 1) {
    $(".modal_text").html("Player 1 Wins!");
    $("#myModal").css("display", "block");
  }
  if (num == 2) {
    $(".modal_text").html("AI Wins!");
    $("#myModal").css("display", "block");
  }
}
