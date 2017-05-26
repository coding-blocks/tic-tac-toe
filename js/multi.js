function multiPlay(row, col) {
  if (checkLegalMove(row, col) == true) {
    if (player == 1) {
      playTurn(row, col);
      if (checkWin(1) == true) {
        multiEndGame(1);
      }
    }
    else {
      playTurn(row, col);
      if (checkWin(2) == true) {
        multiEndGame(2);
      }
    }
  }
}

function multiEndGame(num) {
  if (num == 0) {
    $(".modal_text").html("Tie game!");
    $("#myModal").css("display", "block");
  }
  if (num == 1) {
    $(".modal_text").html("Player 1 Wins!");
    $("#myModal").css("display", "block");
  }
  if (num == 2) {
    $(".modal_text").html("Player 2 Wins!");
    $("#myModal").css("display", "block");
  }
}
