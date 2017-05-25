function multiPlay(row, col) {
  if (checkLegalMove(row, col) == true) {
    if (player == 1) {
      multiTurn(row, col);
      if (checkWin(1) == true) {
        multiEndGame(1);
      }
      player = 2;
    } else {
      multiTurn(row, col);
      if (checkWin(2) == true) {
        multiEndGame(2);
      }
      player = 1;
    }
  }
}

function multiTurn(row, col) {
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
